<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import CustomSubmitButton from '../SmallComponents/CustomSubmitButton.vue';
    import DropdownState from '../TasklistGeneral/DropdownState.vue';
    import TasklistEdit from '../TasklistGeneral/TasklistEdit.vue';
    import NewTask from '@/components/TasklistGeneral/NewTask.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import TaskEdit from '../TasklistGeneral/TaskEdit.vue';
    import { ref } from 'vue';

    const props = defineProps({
        tasklist: Object,
        color: String,
    });
    
    const tasklistStore = useTaskListStore();

    const showUpdateTasklist = ref(false);
    const toggleUpdateTasklist = () => showUpdateTasklist.value = !showUpdateTasklist.value;

    const showUpdateTask = ref(0);
    const toggleUpdateTask = (id) => showUpdateTask.value = id;
</script>

<template>
    <div class="bg-white/80 border-b-2 border-l-2 border-r-2 w-full shadow-xl rounded-b-xl p-4 border-t-1">
        <div
            class="flex flex-col border-b-1 pb-4 mb-4"
            :style="[`border-color: ${color}`]">
            <div
                v-show="tasklist.description.length"
                class="flex flex-col pb-3">
                <span class="font-bold">Description:</span>
                <span class="text-gray-400">{{ tasklist.description }}</span>
            </div>
            <div class="flex justify-between">
                <CustomSubmitButton
                    @click="toggleUpdateTasklist">
                    Edit Tasklist
                </CustomSubmitButton>
                <CustomSubmitButton
                    @click="tasklistStore.sortTasksByStatus(tasklist.id)"
                    class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded">
                    sortieren
                </CustomSubmitButton>
            </div>
            <TasklistEdit
                v-if="showUpdateTasklist"
                @close="toggleUpdateTasklist"
                :tasklist="tasklist">
            </TasklistEdit>
        </div>
        <div v-for="task in tasklist.tasks" class="flex flex-col border-b-1 mb-4 pb-2" :style="[`border-color: ${color}`]">
            <div class="flex flex-col max-w-full break-words gap-1">
                <div class="flex justify-between">
                    <span class="font-bold">{{ task.title }}</span>
                </div>
                <span class="text-gray-400 break-words mb-2">{{ task.description }}</span>
                <div class="flex flex-row items-center justify-between mb-4">
                    <DropdownState
                        class="self-center max-w-40"
                        :task="task">
                    </DropdownState>
                    <DefaultButton
                        class="group"
                        @click="toggleUpdateTask(task.id)">
                        <img
                            src="@/assets/images/Options.svg"
                            alt="Options Svg"
                            class="w-7 h-7 transition-transform duration-300 ease-in-out group-hover:rotate-90">
                    </DefaultButton>
                    <TaskEdit
                        v-if="showUpdateTask === task.id" :tasklist="tasklist"
                        :task="task"
                        @close="toggleUpdateTask(0)">
                    </TaskEdit>
                </div>
            </div>
        </div>
        <NewTask
            class="w-full"
            :tasklistId="tasklist.id">
        </NewTask>
    </div>
</template>