
# Build and Deploy Script

This repository contains a bash script `build_and_deploy.sh` that automates the process of building Docker images, bumping version numbers, pushing Docker images, committing and pushing changes to a Git repository, and deploying updates to a remote server using Nuxt.

## Prerequisites

- Docker installed on your local machine.
- Git installed on your local machine.
- `sshpass` installed on your local machine.
- A `.env` file with the following keys:
  ```
  HOST=<your_host>
  PORT=<your_port>
  PASSWORD=<your_password>
  USER=<your_user>
  ```
- A `version` file with the current version, e.g., `1.2.0`.

### Installing `sshpass`

#### Ubuntu/Debian

```sh
sudo apt-get install sshpass
```

#### MacOS

```sh
brew install hudochenkov/sshpass/sshpass
```

## Nuxt Information

Nuxt is a powerful framework based on Vue.js that helps you create server-rendered applications, single-page applications (SPA), and static sites. It provides a robust structure for building web applications, with features like automatic code splitting, server-side rendering, powerful routing system, and more.

For more information on Nuxt, visit the [Nuxt.js Documentation](https://nuxtjs.org/docs).

## Script Details

The `build_and_deploy.sh` script performs the following steps:

1. **Load Environment Variables**: Loads environment variables from the `.env` file.
2. **Bump Version**: Prompts the user to specify which part of the version (major, minor, fix) to bump. The new version is saved in the `version` file.
3. **Build Docker Images**: Builds two Docker images:
   - `moritzenderle/janaenderle:latest`
   - `moritzenderle/janaenderle:v<new_version>`
4. **Push Docker Images**: Pushes both Docker images to the Docker registry.
5. **Commit and Push Git Changes**: Commits the version change and pushes it to the Git repository with the commit message being the new version.
6. **Deploy Update**: Connects to the remote host using SSH, changes to the `nuxt` user, and runs the `~/update.sh` script to deploy the update.

## Usage

1. Clone this repository and navigate to its directory:
   ```sh
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Create and configure your `.env` file:
   ```sh
   echo -e "HOST=<your_host>\nPORT=<your_port>\nPASSWORD=<your_password>\nUSER=<your_user>" > .env
   ```

3. Create and set your initial `version` file:
   ```sh
   echo "1.2.0" > version
   ```

4. Make the `build_and_deploy.sh` script executable:
   ```sh
   chmod +x build_and_deploy.sh
   ```

5. Run the script:
   ```sh
   ./build_and_deploy.sh
   ```

   You will be prompted to specify which part of the version to bump (major, minor, fix). The script will then perform all the steps mentioned above.

## Example

```sh
./build_and_deploy.sh
Enter the part to bump (major, minor, fix): minor
New version: 1.3.0
Building Docker images...
...
Pushing Docker images...
...
Committing and pushing changes to Git...
...
Connecting to remote host...
All done!
```

## Notes

- Ensure you have the required permissions to build and push Docker images and to commit and push changes to the Git repository.
- The script assumes that the `~/update.sh` file exists on the remote host and is executable by the `nuxt` user.

## License

This project is licensed under the MIT License.
