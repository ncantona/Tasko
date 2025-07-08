<script setup>
    import { ref } from 'vue';

    const currentTaskLists = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2 bg-white/50 shadow-xl rounded-xl p-8">
        <span class="font-bold">My current Tasklists:</span>
        <span v-show="!currentTaskLists.length">Empty.</span>
        <ul v-show="currentTaskLists.length">
            <li v-for="task in currentTaskLists">
                currentThingi
            </li>
        </ul>
    </div>
</template>