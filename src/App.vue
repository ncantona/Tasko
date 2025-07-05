<script setup>
  import NavBar from './components/NavBar.vue';
  import ProfileEdit from './views/ProfileEdit.vue';
</script>

<template>
  <div class="flex flex-col justify-center mx-auto w-4/6 mt-5">
    <NavBar class="mb-10"/>
    <RouterView></RouterView>
  </div>
</template>