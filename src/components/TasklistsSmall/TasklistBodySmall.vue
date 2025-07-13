<script setup>
    import NewTask from '@/components/NewTask.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { URL } from '@/API/Url.vue';
    import axios from 'axios';
    import { ref } from 'vue';

    const isDone = ref(false);
    const props = defineProps({
        tasklist: Object
    });

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${URL}/api/task/${id}`)
            props.tasklist.tasks = props.tasklist.tasks.filter(task => task.id !== id);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <div class="bg-white/90 border-b-2 border-l-2 border-r-2 w-full shadow-xl rounded-b-xl p-4 border-t-1">
        <div v-for="task in tasklist.tasks" class="flex flex-col">
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