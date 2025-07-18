<script setup>
    import { useTaskListStore } from '@/stores/useTaskListStore';
    import { computed } from 'vue';

    const tasklistStore = useTaskListStore();

    const totalTasks = computed(() => {
        return (tasklistStore.tasklists.reduce((sum, tl) => sum + tl.tasks.length, 0));
    });

    const statusCounts = computed(() => {
        return (tasklistStore.tasklists.reduce(
            (acc, tl) => {
            tl.tasks.forEach(task => {
                acc[task.status] = (acc[task.status] || 0) + 1;
            });
            return acc;
            },
            { TODO: 0, IN_PROGRESS: 0, DONE: 0 }
        ));
    });

    const progressPercent = computed(() => {
        if (totalTasks.value === 0)
            return (0);
        return ((statusCounts.value.DONE / totalTasks.value) * 100);
    });
</script>

<template>
    <div class="p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4 flex justify-center">Statistics</h2>
        <div class="mb-4 flex flex-col items-center min-w-40">
            <span><b>Total Tasks:</b> {{ totalTasks }}</span>
            <span><b>Open:</b> {{ statusCounts.TODO }}</span>
            <span><b>In Progress:</b> {{ statusCounts.IN_PROGRESS }}</span>
            <span><b>Done:</b> {{ statusCounts.DONE }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div 
            class="h-6 bg-blue-600 text-white text-center leading-6 font-semibold"
            :style="{ width: progressPercent + '%' }"
            >
            {{ progressPercent.toFixed(1) }}%
            </div>
        </div>
    </div>
</template>
