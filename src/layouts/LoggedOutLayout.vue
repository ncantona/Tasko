<script setup>
    import PopupWindow from '@/components/General/PopupWindow.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { storeToRefs } from 'pinia';

    const popupStore = usePopupStore();
    const { success, error } = storeToRefs(usePopupStore());
</script>

<template>
    <div class="flex justify-center md:items-center min-h-screen">
        <RouterView/>
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