<script setup>
    import NavBar from '@/components/General/NavBar.vue';
    import CustomFooter from '@/components/General/CustomFooter.vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { storeToRefs } from 'pinia';

    const popupStore = usePopupStore();
    const { success, error } = storeToRefs(usePopupStore());
</script>

<template>
  <div class="flex flex-col min-h-screen justify-center mx-auto md:min-w-160 md:max-w-300 w-5/6">
    <div class="flex flex-col min-h-screen">
      <NavBar class="mb-10" />
      <div class="flex-grow">
        <RouterView/>
      </div>
      <CustomFooter/>
    </div>
      <PopupWindow
        v-if="success"
        @close="popupStore.clearSuccess"
        class="self-center">
        {{ popupStore.success }}
      </PopupWindow>
      <PopupWindow
        v-if="error.length"
        @close="popupStore.clearError"
        type="error"
        class="self-center">
        {{ popupStore.error }}
      </PopupWindow>
  </div>
</template>
