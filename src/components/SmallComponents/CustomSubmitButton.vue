<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
</script>

<template>
    <DefaultButton
        class="bg-blue-600 py-3 text-white font-semibold shadow-lg transition-all duration-200 ease-in-out rounded-xl px-4 hover:bg-blue-500"
        @click="$emit('submit')">
        <slot>Submit Button</slot>
    </DefaultButton>
</template>