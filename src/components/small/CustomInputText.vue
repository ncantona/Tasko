<script setup>
    const props = defineProps({
        label: String,
        name: String,
        type: {
            type: String,
            default: 'text',
        },
    });
</script>

<template>
    <div class="flex flex-col gap-2">
        <label :for="name">{{ label }}</label>
        <input
            :type="type"
            :id="name"
            :name="name"
            class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500"
        />
    </div>
</template>