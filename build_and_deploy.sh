#!/bin/bash

# Load environment variables from .env file
source .env

# Function to bump up the version
bump_version() {
    local version=$1
    local part=$2

    IFS='.' read -r -a parts <<< "$version"
    if [[ "$part" == "major" ]]; then
        parts[0]=$((parts[0] + 1))
        parts[1]=0
        parts[2]=0
    elif [[ "$part" == "minor" ]]; then
        parts[1]=$((parts[1] + 1))
        parts[2]=0
    elif [[ "$part" == "fix" ]]; then
        parts[2]=$((parts[2] + 1))
    else
        echo "Invalid version part specified. Use 'major', 'minor' or 'fix'."
        exit 1
    fi

    echo "${parts[0]}.${parts[1]}.${parts[2]}"
}

# Get the current version
current_version=$(cat version)

# Get user input for version bump
read -p "Enter the part to bump (major, minor, fix): " part

# Bump the version
new_version=$(bump_version "$current_version" "$part")
echo "New version: $new_version"

# Save the new version to the file
echo "$new_version" > version

# Build the Docker images
echo "Building Docker images..."
docker build -t moritzenderle/janaenderle:latest .
docker build -t moritzenderle/janaenderle:v"$new_version" .

# Push the Docker images
echo "Pushing Docker images..."
docker push moritzenderle/janaenderle:latest
docker push moritzenderle/janaenderle:v"$new_version"

# Commit and push changes to the Git repository
echo "Committing and pushing changes to Git..."
git add .
git commit -m "$new_version"
git push

# Connect to the remote host and execute the update script
echo "Connecting to remote host..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no $USER@$HOST -p $PORT << 'EOF'
sudo -u nuxt bash -c '~/update.sh'
EOF
