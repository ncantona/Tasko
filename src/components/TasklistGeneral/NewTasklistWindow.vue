<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import CancelButton from '../SmallComponents/CancelButton.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { ref } from 'vue';

    const props = defineProps({
        tasklistId: String
    });
    const emits = defineEmits(['close']);

    const tasklistStore = useTaskListStore();
    const popupStore = usePopupStore();
    
    const label = ref('');
    const description = ref('');

    const createNewTasklist = async () => {
        const tasklistData = {
            slug: '',
            label: label.value,
            description: description.value
        }
        try {
            await tasklistStore.createNewTask(tasklistData);
            popupStore.success = 'Tasklist creation successful'
        } catch (error) {
            popupStore.error = 'Tasklist creation failed'
        }
        emits('close');
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center backdrop-blur-sm justify-center z-10">
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
                <CustomSubmitButton>Create New Tasklist</CustomSubmitButton>
            </div>
        </form>
    </div>
</template>