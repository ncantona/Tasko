<script setup>
    import { ref } from 'vue';

    const currentTaskLists = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2 p-3 border-2 border-black/40 rounded-md">
        <span>My current Tasklists:</span>
        <span v-show="!currentTaskLists.length">Empty.</span>
        <ul v-show="currentTaskLists.length">
            <li v-for="task in currentTaskLists">
                currentThingi
            </li>
        </ul>
    </div>
</template>