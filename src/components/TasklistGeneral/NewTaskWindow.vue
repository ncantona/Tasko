<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { ref } from 'vue';

    const props = defineProps({
        tasklistId: Number
    });
    const emits = defineEmits(['close']);

    const tasklistStore = useTaskListStore();
    const popupStore = usePopupStore();

    const title = ref('');
    const description = ref('');

    const addNewTask = async () => {
        const taskData = {
            tasklistId: props.tasklistId,
            status: 'TODO',
            title: title.value,
            description: description.value,
        }
        try {
            await tasklistStore.addNewTask(taskData);
            popupStore.success = 'Task creation successful';
        } catch (error) {
            popupStore.error = 'Task creation failed';
        }
        emits('close');
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
        <form @submit.prevent="addNewTask" class="max-w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
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
                <CustomButtonSubmit>Create New Task</CustomButtonSubmit>
            </div>
        </form>
    </div>
</template>