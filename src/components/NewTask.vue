<script setup>
    import NewTaskWindow from '@/components/NewTaskWindow.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { ref } from 'vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';

    const props = defineProps({
        tasklistId: Number,
    });
    const showSuccess = ref(false);
    const showError = ref('');
    const showNewTaskWindow = ref(false);
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
    const handleSucces = () => {
        showSuccess.value = true;
        toggleNewTaskWindow();
    }
</script>

<template>
    <div class="flex justify-center pt-4">
        <DefaultButton @click="toggleNewTaskWindow" class="w-full flex items-center justify-center">
            <img src="@/images/Plus.svg" alt="Plus svg" class="w-6 h-6">
        </DefaultButton>
        <NewTaskWindow v-if="showNewTaskWindow" @success="handleSucces" @failed="showError = 'Task creation failed'" @close="toggleNewTaskWindow" :tasklistId="tasklistId"></NewTaskWindow>
        <PopupWindow @close="showSuccess = false" v-if="showSuccess" class="self-center">Task creation successful</PopupWindow>
        <PopupWindow @close="showError = ''" v-if="showError" type="error" class="self-center">{{ showError }}</PopupWindow>
    </div>
</template>