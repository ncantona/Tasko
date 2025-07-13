<script setup>
    import DefaultButton from '@/components/small/DefaultButton.vue';
</script>

<template>
    <div>
        <DefaultButton 
            @click="$emit('newTask')"
            class="bg-white/50 shadow-xl rounded-xl p-4 h-full">
            <img src="@/images/Plus.svg" alt="Plus svg" class="w-8">
        </DefaultButton>
    </div>
</template>