<script setup>
  import NavBar from './components/NavBar.vue';
  import CustomFooter from './components/CustomFooter.vue';
</script>

<template>
  <div class="flex flex-col justify-center mx-auto md:w-4/6 w-5/6 mt-5">
    <NavBar class="mb-10"/>
    <RouterView class="min-h-screen"/>
    <CustomFooter/>
  </div>
</template>