<script setup>
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';

    const tasklistStore = useTaskListStore();
    const resetFilter = () => {

    }

</script>

<template>
    <div class="bg-white/90 shadow-xl rounded-xl p-4 flex flex-col">
        <span>Filter:</span>
        <DefaultButton
            @click="resetFilter"
            class="text-blue-600 hover:text-blue-500">
            Filter zurücksetzen
        </DefaultButton>
    </div>
</template>