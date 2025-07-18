<script setup>
    import NewTaskWindow from '@/components/TasklistGeneral/NewTaskWindow.vue';
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import { ref } from 'vue';

    const props = defineProps({
        tasklistId: Number,
    });

    const showNewTaskWindow = ref(false);
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
</script>

<template>
    <div class="flex justify-center">
        <DefaultButton
            @click="toggleNewTaskWindow"
            class="bg-blue-600 py-3  text-white font-semibold shadow-lg hover:bg-blue-500 rounded-xl p-4 w-full transition-all duration-200 ease-in-out flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create New Task
        </DefaultButton>
        <NewTaskWindow
            v-if="showNewTaskWindow"
            @close="toggleNewTaskWindow"
            :tasklistId="tasklistId">
        </NewTaskWindow>
    </div>
</template>