<script setup>
    import { ref } from 'vue';

    const sharedTaskLists = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2 p-3 border-2 border-black/40 rounded-md">
        <span>Shared Tasklists:</span>
        <span v-show="!sharedTaskLists.length">Empty.</span>
        <ul v-show="sharedTaskLists.length">
            <li v-for="task in sharedTaskLists">
                currentThingi
            </li>
        </ul>
    </div>
</template>