<script setup>
    import { useTaskListStore } from '@/stores/useTaskListStore';

    const tasklistStore = useTaskListStore();
    const tasklists = tasklistStore.tasklists.filter(tasklist => tasklist.sharedTasklists.length === 1);
</script>

<template>
    <div class="flex flex-col gap-2 bg-white/50 shadow-xl rounded-xl p-8">
        <span class="font-bold">My Tasklists:</span>
        <span v-if="!tasklists.length">Empty.</span>
        <ul v-show="tasklistStore.tasklists.length">
            <li v-for="(tasklist, index) in tasklists">
                {{ index + 1 }}. {{ tasklist.label }}
            </li>
        </ul>
    </div>
</template>