<script setup>
    import NavBar from '@/components/NavBar.vue';
    import CustomFooter from '@/components/CustomFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen justify-center mx-auto md:w-4/6 w-5/6">
    <div class="flex flex-col min-h-screen">
      <NavBar class="mb-10" />
      <div class="flex-grow">
        <RouterView></RouterView>
      </div>
      <CustomFooter/>
    </div>
  </div>
</template>
