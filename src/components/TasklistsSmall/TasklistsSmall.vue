<script setup>
    import NewTasklist from '@/components/NewTasklist.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import TaskListSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
    import TaskNavSmall from '@/components/TasklistsSmall/TaskNavSmall.vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';
    import NewTasklistWindow from '@/components/NewTasklistWindow.vue'
    import { ref } from 'vue';

    const showNewTaskWindow = ref(false);
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
    const showSuccess = ref(false);
    const showError = ref('');
</script>

<template>
    <div>
        <CustomHeader>My Tasklists</CustomHeader>
        <div class="flex flex-col justify-center md:hidden">
            <div class="flex flex-row gap-2">
                <TaskNavSmall class="w-full"/>
                <NewTasklist @newTask="toggleNewTaskWindow" class="max-h-full"/>
            </div>
            <NewTasklistWindow></NewTasklistWindow>
            <TaskListSmall class="mt-5"/>
            <PopupWindow @close="showSuccess = false" v-if="showSuccess" class="self-center">Task creation successful</PopupWindow>
            <PopupWindow @close="showError = ''" v-if="showError" type="error" class="self-center">{{ showError }}</PopupWindow>
        </div>
    </div>
</template>