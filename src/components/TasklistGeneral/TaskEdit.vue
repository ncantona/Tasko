<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { ref } from 'vue';

    const props = defineProps({
        tasklist: Object,
        task: Object,
    });
    const emits = defineEmits(['close']);

    const tasklistStore = useTaskListStore();
    const popupStore = usePopupStore();

    const title = ref(`${props.task.title}`);
    const description = ref(`${props.task.description}`);

    const updateTask = async () => {
        const taskData = {
            title: title.value,
            description: description.value,
            status: props.task.status,
        }
        try {
            await tasklistStore.updateTask(taskData, props.task);
            popupStore.success = 'Task update successful'
        } catch (error) {
            popupStore.error = 'Task update failed'
        }
        emits('close');
    };

    const deleteTask = async () => {
        try {
            await tasklistStore.deleteTask(props.tasklist, props.task.id);
        } catch (error) {
            console.log(error);
        }
        emits('close');
    };
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-10">
        <form @submit.prevent="createNewTasklist" class="max-w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputText
                v-model="title"
                type="text"
                label="Title*"
                name="title">
            </CustomInputText>
            <label for="description">Description</label>
            <textarea
                v-model="description"
                name="description"
                id="description"
                class="min-h-35 border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500">
            </textarea>
            <div class="flex justify-around">
                <DefaultButton
                    type="button"
                    @click="emits('close')"
                    class="text-blue-600 hover:text-blue-500">
                    cancel
                </DefaultButton>
                <CustomButtonSubmit @click="updateTask">Update Task</CustomButtonSubmit>
            </div>
            <div class="flex justify-center">
                <DefaultButton type="button" class="text-red-600 hover:text-red-400" @click="deleteTask">delete</DefaultButton>
            </div>
        </form>
    </div>
</template>