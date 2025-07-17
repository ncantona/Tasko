<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { ref } from 'vue';
    import TasklistDeleteWindow from './TasklistDeleteWindow.vue';

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
            console.log(error);
        }
        emits('close');
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-10">
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
                <CustomButtonSubmit @click="updateTasklist">Update Tasklist</CustomButtonSubmit>
            </div>
            <div class="flex justify-center">
                <DefaultButton type="button" class="text-red-600 hover:text-red-400" @click="showDelete = true">delete</DefaultButton>
                <TasklistDeleteWindow v-if="showDelete" @close="showDelete = false" @delete="deleteTasklist"></TasklistDeleteWindow>
            </div>
        </form>
    </div>
</template>