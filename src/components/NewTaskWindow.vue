<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';
    import { ref } from 'vue';

    const tasklistStore = useTaskListStore();
    const title = ref('');
    const description = ref('');
    const showSuccess = ref(false);
    const showError = ref('');
    const emits = defineEmits(['success', 'failed']);
    const props = defineProps({
        tasklistId: String
    });

    const addNewTask = async () => {
        const taskData = {
            tasklistId: props.tasklistId,
            status: 'TODO',
            title: title.value,
            description: description.value,
        }
        try {
            await tasklistStore.addNewTask(taskData);
            showSuccess.value = true;
            emits('success');
        } catch (error) {
            emits('failed');
        }
    }
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black/50">
        <form @submit.prevent="addNewTask" class="bg-white/90 shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputText v-model="title" type="text" label="Title*" name="title"></CustomInputText>
            <label for="description">Description</label>
            <textarea v-model="description" name="description" id="description" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500"></textarea>
            <div class="flex justify-around">
                <DefaultButton type="button" @click="$emit('close')" class="text-blue-600 hover:text-blue-500">cancel</DefaultButton>
                <CustomButtonSubmit>Create New Task</CustomButtonSubmit>
            </div>
            <PopupWindow @close="showSuccess = false" v-if="showSuccess" class="self-center">Task creation successful</PopupWindow>
            <PopupWindow @close="showError = ''" v-if="showError" type="error" class="self-center">{{ showError }}</PopupWindow>
        </form>
    </div>
</template>