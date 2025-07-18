<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import CancelButton from '../SmallComponents/CancelButton.vue';
    import DeleteButton from '../SmallComponents/DeleteButton.vue';
    import TasklistDeleteWindow from './TasklistDeleteWindow.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { ref } from 'vue';

    const props = defineProps({
        tasklist: Object,
    });
    const emits = defineEmits(['close']);

    const tasklistStore = useTaskListStore();
    const popupStore = usePopupStore();

    const label = ref(`${props.tasklist.label}`);
    const description = ref(`${props.tasklist.description}`);

    const showDelete = ref(false);

    const updateTasklist = async () => {
        const tasklistData = {
            slug: '',
            label: label.value,
            description: description.value
        }
        try {
            await tasklistStore.updateTasklist(tasklistData, props.tasklist.id);
            popupStore.success = 'Tasklist update successful'
        } catch (error) {
            popupStore.error = 'Tasklist update failed'
        }
        emits('close');
    }

    const deleteTasklist = async () => {
        try {
            await tasklistStore.deleteTasklist(props.tasklist.id);
        } catch (error) {
            popupStore.error = 'Failed to delete tasklist';
        }
        emits('close');
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center flex-col gap-2 justify-center backdrop-blur-sm z-10">
        <div class="w-5/6 max-w-80">
            <DeleteButton
                type="button"
                class="w-full flex justify-center"
                @click="showDelete = true">
                delete
            </DeleteButton>
        </div>
        <form
            @submit.prevent="createNewTasklist"
            class="max-w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputField
                v-model="label"
                type="text"
                label="Label*"
                name="label">
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
                    @click="updateTasklist">
                    Update Tasklist
                </CustomSubmitButton>
            </div>
            <div class="flex justify-center">
                <TasklistDeleteWindow
                    v-if="showDelete"
                    @close="showDelete = false"
                    @delete="deleteTasklist"
                />
            </div>
        </form>
    </div>
</template>