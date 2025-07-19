<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import TaskListBody from '@/components/Tasklists/TasklistBody.vue';
    import NewTasklist from '../TasklistGeneral/NewTasklist.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import TasklistStatistics from './TasklistStatistics.vue';
    import SharedOwner from '@/assets/images/SharedOwner.svg'
    import { useUserStore } from '@/stores/useUserStore';
    import Shared from '@/assets/images/Shared.svg'
    import { ref } from 'vue';

    const tasklistStore = useTaskListStore();
    const userStore = useUserStore();

    const openStates = ref({});
    const isOpen = (id) => !!openStates.value[id];
    const toggleOpen = (id) => {
        openStates.value[id] = !openStates.value[id];
    };

    const getProgress = (tasklist) => {
        const total = tasklist.tasks.length;
        const done = tasklist.tasks.filter(task => task.status === 'DONE').length;
            if (total === 0) return 0;
                return (done / total) * 100;
    };

    const getColor = (id) => {
        switch (id % 10) {
            case 0:
                return 'rgba(30, 64, 175, 0.4)';
            case 1:
                return 'rgba(37, 99, 235, 0.35)';
            case 2:
                return 'rgba(59, 130, 246, 0.4)';
            case 3:
                return 'rgba(2, 132, 199, 0.35)'; 
            case 4:
                return 'rgba(6, 182, 212, 0.3)';
            case 5:
                return 'rgba(14, 165, 233, 0.35)';
            case 6:
                return 'rgba(8, 145, 178, 0.4)';
            case 7:
                return 'rgba(20, 90, 160, 0.3)';
            case 8:
                return 'rgba(40, 110, 220, 0.35)';
            case 9:
                return 'rgba(25, 80, 200, 0.4)';
            default:
                return 'rgba(30, 64, 175, 0.4)';
        };
    };

    const lightenColor = (rgba, amount = 0.2) => {
        const match = rgba.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
        if (!match)
            return rgba;
        let [r, g, b, a] = match.slice(1).map(Number);
        r = Math.min(255, r + 255 * amount);
        g = Math.min(255, g + 255 * amount);
        b = Math.min(255, b + 255 * amount);
        return (`rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`);
    };
</script>

<template>
    <div class="flex flex-col md:flex-row-reverse gap-1 md:gap-10">
        <div class="w-full md:max-w-2/6 flex flex-col gap-5 mb-5">
            <NewTasklist/>
            <TasklistStatistics class="hidden md:block w-full"/>
        </div>
        <div class="w-full gap-1 flex flex-col md:min-w-3/6">
            <div v-for="tasklist in tasklistStore.tasklists">
                <DefaultButton
                    @click="toggleOpen(tasklist.id)"
                    :style="[`border-color: ${getColor(tasklist.id)}`,
                    `background: linear-gradient(to right, ${lightenColor(getColor(tasklist.id), 0.3)} ${getProgress(tasklist)}%, rgba(255, 255, 255, 0.8) ${getProgress(tasklist)}%)`]"
                    :class="isOpen(tasklist.id) ? 'border-b-0 rounded-t-xl' : 'rounded-xl'"
                    class="bg-white/90 w-full relative shadow-xl border-2 p-4 flex justify-between">
                    <span class="font-bold">{{ tasklist.label }}</span>
                    <img
                        :src="tasklist.userId === userStore.user.id ? SharedOwner : Shared"
                        alt="Shared svg"
                        v-if="tasklist.sharedTasklists.length > 1"
                        class="absolute -left-1 -top-1 rotate-45"
                    >
                    <div class="flex gap-2 items-center">
                        <div class="flex gap-1 items-center">
                            <span
                                class="bg-green-100 border-green-400 max-h-6 text-green-700 rounded-full px-2 hover:bg-green-200">
                                {{ (tasklist.tasks.filter(task => task.status === 'TODO')).length }}
                            </span>
                            <span
                                class="bg-orange-100 border-orange-400 max-h-6  text-orange-700 rounded-full px-2 hover:bg-orange-200">
                                {{ (tasklist.tasks.filter(task => task.status === 'IN_PROGRESS')).length }}
                            </span>
                            <span
                                class="bg-gray-100 border-gray-400 max-h-6  text-gray-700 rounded-full px-2 hover:bg-gray-200">
                                {{ (tasklist.tasks.filter(task => task.status === 'DONE')).length }}
                            </span>
                        </div>
                        <svg class="w-6 h-6" :style="[`color: ${getColor(tasklist.id)}`]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L12 16L19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </DefaultButton>
                <TaskListBody
                    :tasklist="tasklist"
                    :color="getColor(tasklist.id)"
                    v-show="isOpen(tasklist.id)"
                    :style="[`border-color: ${getColor(tasklist.id)}`]"
                />
            </div>
        </div>
    </div>
</template>