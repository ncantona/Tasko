<script setup>
    import NewTasklist from '@/components/NewTasklist.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import TaskListSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
    import TaskNavSmall from '@/components/TasklistsSmall/TaskNavSmall.vue';
    import NewTasklistWindow from '@/components/NewTasklistWindow.vue'
    import { ref } from 'vue';

    const showNewTaskWindow = ref(false);
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
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
        </div>
    </div>
</template>