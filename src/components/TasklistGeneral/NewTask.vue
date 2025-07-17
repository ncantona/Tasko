<script setup>
    import NewTaskWindow from '@/components/TasklistGeneral/NewTaskWindow.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
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
            class="w-full flex items-center justify-center">
            <img
                src="@/images/Plus.svg"
                alt="Plus svg"
                class="w-8 h-8"
            >
        </DefaultButton>
        <NewTaskWindow
            v-if="showNewTaskWindow"
            @close="toggleNewTaskWindow"
            :tasklistId="tasklistId">
        </NewTaskWindow>
    </div>
</template>