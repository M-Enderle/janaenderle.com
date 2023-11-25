<script setup>
definePageMeta({
  title: 'pages.titles.about'
})
</script>

<template>
  <div>
  </div>
</template>

<script>
export default {
  mounted() {
    // get id="navbar_projects" and change it to the red
    const navbar_free_hand= document.getElementById("navbar_free_hand");
    navbar_free_hand.style.color = "rgb(255, 26, 26)";
    const navbar_projects = document.getElementById("navbar_projects");
    navbar_projects.style.color = "black";
  }
}
</script>

<style lang="scss">

</style>