<script setup>
    import DefaultButton from './DefaultButton.vue';
</script>

<template>
    <DefaultButton
        class="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        @click="$emit('click')">
        <slot></slot>
    </DefaultButton>
</template>