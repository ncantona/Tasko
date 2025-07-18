<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import DeleteButton from '../SmallComponents/DeleteButton.vue';
    import CancelButton from '../SmallComponents/CancelButton.vue';
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
            popupStore.success = 'Task update successful';
        } catch (error) {
            popupStore.error = 'Task update failed';
        }
        emits('close');
    };

    const deleteTask = async () => {
        try {
            await tasklistStore.deleteTask(props.tasklist, props.task.id);
        } catch (error) {
            popupStore.error = 'Failed to delete task';
        }
        emits('close');
    };
</script>

<template>
    <div class="fixed flex-col gap-2 inset-0 flex items-center justify-center backdrop-blur-sm z-10">
        <div class="w-5/6 max-w-80">
            <DeleteButton
                type="button"
                class="w-full flex justify-center"
                @click="deleteTask">
                delete
            </DeleteButton>
        </div>
        <form
            @submit.prevent="createNewTasklist"
            class="max-w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputField
                v-model="title"
                type="text"
                label="Title*"
                name="title">
            </CustomInputField>
            <label
                for="description"
                class="font-bold">
                Description
            </label>
            <textarea
                v-model="description"
                name="description"
                id="description"
                class="min-h-35 border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500">
            </textarea>
            <div class="flex justify-around">
                <CancelButton
                    type="button"
                    @click="emits('close')"
                    class="bg-white py-3 text-blue-600 font-semibold shadow-lg transition-all duration-200 ease-in-out rounded-xl px-4 hover:bg-gray-100">
                </CancelButton>
                <CustomSubmitButton
                    @click="updateTask">
                    Update Task
                </CustomSubmitButton>
            </div>
        </form>
    </div>
</template>