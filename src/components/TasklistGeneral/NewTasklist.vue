<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import NewTasklistWindow from './NewTasklistWindow.vue';
    import { ref } from 'vue';

    const showNewTasklistWindow = ref(false);
    const toggleNewTasklistWindow = () => showNewTasklistWindow.value = !showNewTasklistWindow.value;
</script>

<template>
    <div>
        <DefaultButton
            @click="toggleNewTasklistWindow"
            class="bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 rounded-xl p-4 w-full transition-all duration-200 ease-in-out flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create New Tasklist
        </DefaultButton>
        <NewTasklistWindow
            v-if="showNewTasklistWindow"
            @close="toggleNewTasklistWindow"
        />
    </div>
</template>