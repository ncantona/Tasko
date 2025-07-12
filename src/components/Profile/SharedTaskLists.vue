<script setup>
    import { ref } from 'vue';

    const sharedTaskLists = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2 bg-white/50 shadow-xl rounded-xl p-8">
        <span class="font-bold">Shared Tasklists:</span>
        <span v-show="!sharedTaskLists.length">Empty.</span>
        <ul v-show="sharedTaskLists.length">
            <li v-for="task in sharedTaskLists">
                currentThingi
            </li>
        </ul>
    </div>
</template>