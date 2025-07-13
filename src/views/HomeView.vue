<script setup>
    import NewTasklist from '@/components/NewTasklist.vue';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import TasklistSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
    import TaskNavSmall from '@/components/TasklistsSmall/TaskNavSmall.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { ref } from 'vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';

    const showNewTaskWindow = ref(false);
    const tasklistStore = useTaskListStore();
    const toggleNewTaskWindow = () => showNewTaskWindow.value = !showNewTaskWindow.value;
    const label = ref('');
    const description = ref('');
    const showSuccess = ref(false);
    const showError = ref('');

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
            <div class="flex flex-row gap-2">
                <TaskNavSmall class="w-full"/>
                <NewTasklist @newTask="toggleNewTaskWindow" class="max-h-full"/>
            </div>
            <div v-show="showNewTaskWindow" class="fixed inset-0 flex items-center justify-center bg-black/50">
                <form @submit.prevent="createNewTask" class="bg-white/90 shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
                    <CustomInputText v-model="label" type="text" label="Label*" name="label"></CustomInputText>
                    <label for="description">Description</label>
                    <textarea v-model="description" name="description" id="description" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500"></textarea>
                    <CustomButtonSubmit>Create New Tasklist</CustomButtonSubmit>
                </form>
            </div>
            <TasklistSmall class="mt-5"/>
            <PopupWindow @close="showSuccess = false" v-if="showSuccess" class="self-center">Task creation successful</PopupWindow>
            <PopupWindow @close="showError = ''" v-if="showError" type="error" class="self-center">{{ showError }}</PopupWindow>
        </div>
    </div>
</template>