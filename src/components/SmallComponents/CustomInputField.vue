<script setup>
    const model = defineModel();
    const props = defineProps({
        label: String,
        name: String,
        required: {
            type: Boolean,
            default: true,
        },
        type: {
            type: String,
            default: 'text',
        },
    });
</script>

<template>
    <div class="flex flex-col gap-2">
        <label
            :for="name"
            class="font-bold">
            {{ label }}
        </label>
        <input
            :type="type"
            :id="name"
            :name="name"
            :required="required"
            class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500"
            v-model="model"
        />
    </div>
</template>