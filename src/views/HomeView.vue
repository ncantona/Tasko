<script setup>
    import NewTasklist from '@/components/NewTasklist.vue';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import TasklistSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
    import TaskNavSmall from '@/components/TasklistsSmall/TaskNavSmall.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { ref } from 'vue';

    const showNewTaskWindow = ref(false);
    const tasklistStore = useTaskListStore();
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
    const label = ref('');
    const description = ref('');

    const createNewTask = async () => {
        const tasklistData = {
            slug: '',
            label: label.value,
            description: description.value
        }
        try {
            await tasklistStore.createNewTask(tasklistData);
            showSuccess.value = true;
            showNewTaskWindow.value = false;
        } catch (error) {
            showError.value = 'Task creation failed';
        }
    }

</script>

<template>
    <div>
        <CustomHeader>My Tasklists</CustomHeader>
        <div class="flex flex-col justify-center md:hidden">
            <TasklistSmall class="mt-5"/>
        </div>
    </div>
</template>