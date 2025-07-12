<script setup>
    import { ref } from 'vue';

    const previousTaskLists = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2 p-3 bg-white/50 shadow-xl rounded-xl p-8">
        <span class="font-bold">Previous Tasklists:</span>
        <span v-show="!previousTaskLists.length">Empty.</span>
        <ul v-show="previousTaskLists.length">
            <li v-for="task in previousTaskLists">
                currentThingi
            </li>
        </ul>
    </div>
</template>