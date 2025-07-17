<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
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
        <form @submit.prevent="createNewTasklist" class="max-w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputText
                v-model="label"
                type="text"
                label="Label*"
                name="label">
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
                <CustomButtonSubmit>Create New Tasklist</CustomButtonSubmit>
            </div>
        </form>
    </div>
</template>