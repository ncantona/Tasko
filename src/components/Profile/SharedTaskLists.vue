<script setup>
    import { useTaskListStore } from '@/stores/useTaskListStore';

    const tasklistStore = useTaskListStore();
    const sharedTasklists = tasklistStore.tasklists.filter(tasklist => tasklist.sharedTasklists.length > 1);
</script>

<template>
    <div class="flex flex-col gap-2 bg-white/50 shadow-xl rounded-xl p-8">
        <span class="font-bold">Shared Tasklists:</span>
        <span v-show="!sharedTasklists.length">Empty.</span>
        <ul v-show="sharedTasklists.length">
            <li v-for="(tasklist, index) of sharedTasklists">
                {{ index + 1 }}. {{ tasklist.label }}
            </li>
        </ul>
    </div>
</template>