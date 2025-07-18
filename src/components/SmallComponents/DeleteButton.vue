<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
</script>

<template>
    <DefaultButton
        class="bg-red-600 text-white font-semibold shadow-md transition-all duration-200 ease-in-out rounded-xl px-4 py-3 hover:bg-red-700 hover:shadow-lg active:scale-95 flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-3-3v3" />
        </svg>
        <slot>Delete</slot>
    </DefaultButton>
</template>
