<script setup>
    import NewTask from '@/components/NewTask.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { ref } from 'vue';
import TasklistEdit from '../TasklistEdit.vue';

    const isDone = ref(false);
    const props = defineProps({
        tasklist: Object,
        color: String,
    });
    
    const showUpdateTasklist = ref(false);
    const toggleUpdateTasklist = () => showUpdateTasklist.value = !showUpdateTasklist.value;

    const tasklistStore = useTaskListStore();
    const deleteTask = async (id) => {
        try {
            await tasklistStore.deleteTask(props.tasklist, id);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="bg-white/90 border-b-2 border-l-2 border-r-2 w-full shadow-xl rounded-b-xl p-4 border-t-1">
        <div class="flex flex-col border-b-1 pb-4 mb-4" :style="[`border-color: ${color}`]">
            <div v-show="tasklist.description.length" class="flex flex-col pb-3">
                <span class="font-bold">Description:</span>
                <span class="text-gray-400">{{ tasklist.description }}</span>
            </div>
            <div class="flex justify-center">
                <DefaultButton @click="toggleUpdateTasklist" class="text-blue-600 hover:text-blue-500">Edit Tasklist</DefaultButton>
            </div>
            <TasklistEdit v-if="showUpdateTasklist" @close="toggleUpdateTasklist" :tasklist="tasklist"></TasklistEdit>
        </div>
        <div v-for="task in tasklist.tasks" class="flex flex-col border-b-1 mb-4 pb-2" :style="[`border-color: ${color}`]">
            <div class="flex flex-col max-w-full break-words gap-1">
                <div class="flex justify-between">
                    <div class="flex gap-2">
                        <CustomInputText type="checkbox" name="isDone" v-model="isDone" label=""></CustomInputText>
                        <span class="font-bold">{{ task.title }}</span>
                    </div>
                    <DefaultButton @click="deleteTask(task.id)"><img src="@/images/trashcan.svg" alt="trashcan svg" class="w-6 h-6"></DefaultButton>
                </div>
                <span class="text-gray-400 break-words mb-2">{{ task.description }}</span>
            </div>
        </div>
        <NewTask class="w-full" :tasklistId="tasklist.id"></NewTask>
    </div>
</template>