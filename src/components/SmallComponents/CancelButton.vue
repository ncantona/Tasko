<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
</script>

<template>
    <DefaultButton
        class="bg-white py-3 text-blue-600 font-semibold shadow-lg transition-all duration-200 ease-in-out rounded-xl px-4 hover:bg-gray-100">
        <slot>Cancel</slot>
    </DefaultButton>
</template>

