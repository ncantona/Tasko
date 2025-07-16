<script setup>
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import TaskListBodySmall from '@/components/TasklistsSmall/TasklistBodySmall.vue';
    import TaskNavSmall from './TaskNavSmall.vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { ref } from 'vue';

    const tasklistStore = useTaskListStore();

    const openStates = ref({});
    const isOpen = (id) => !!openStates.value[id];

    const toggleOpen = (id) => {
        openStates.value[id] = !openStates.value[id];
    };
    const getColor = (id) => {
        switch (id % 10) {
            case 0:
                return ('rgba(59, 130, 246, 0.4)');
            case 1:
                return ('rgba(239, 68, 68, 0.4)');
            case 2:
                return ('rgba(34, 197, 94, 0.4)');
            case 3:
                return ('rgba(234, 179, 8, 0.4)');
            case 4:
                return ('rgba(139, 92, 246, 0.4)');
            case 5:
                return ('rgba(236, 72, 153, 0.4)');
            case 6:
                return ('rgba(20, 184, 166, 0.4)');
            case 7:
                return ('rgba(99, 102, 241, 0.4)');
            case 8:
                return ('rgba(249, 115, 22, 0.4)');
            case 9:
                return ('rgba(16, 185, 129, 0.4)');
            default:
                return ('rgba(249, 115, 22, 0.4)');
    };
};
</script>

<template>

    <div class="flex flex-col gap-1">
        <TaskNavSmall class="mb-5"/>
        <div v-for="tasklist in tasklistStore.tasklists">
            <DefaultButton
                @click="toggleOpen(tasklist.id)"
                :style="[`border-color: ${getColor(tasklist.id)}`]"
                :class="isOpen(tasklist.id) ? 'border-b-0 rounded-t-xl' : 'rounded-xl'"
                class="bg-white/90 w-full shadow-xl border-2 p-4 flex justify-between">
                <span class="font-bold">{{ tasklist.label }}</span>
                <svg class="w-6 h-6" :style="[`color: ${getColor(tasklist.id)}`]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9L12 16L19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </DefaultButton>
            <TaskListBodySmall
                :tasklist="tasklist"
                :color="getColor(tasklist.id)"
                v-show="isOpen(tasklist.id)"
                :style="[`border-color: ${getColor(tasklist.id)}`]"
            />
        </div>
    </div>
</template>