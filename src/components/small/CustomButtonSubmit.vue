<script setup>
    import DefaultButton from './DefaultButton.vue';
</script>

<template>
    <DefaultButton
        class="bg-blue-600 text-white rounded-md p-4 py-2 hover:bg-blue-500"
        @click="$emit('submit')">
        <slot></slot>
    </DefaultButton>
</template>