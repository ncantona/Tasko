<script setup>
    import { ref } from 'vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import TaskOptionsSmall from '@/components/TasklistsSmall/TaskOptionsSmall.vue';
    import NewTasklist from '../NewTasklist.vue';

    const showOptions = ref(false);
    const toggleOptionWindow = () => showOptions.value = !showOptions.value;

</script>

<template>
    <div class="flex flex-row gap-2">
        <DefaultButton @click="toggleOptionWindow" class="w-full bg-white/50 shadow-xl rounded-xl p-4 flex flex-row justify-between">
            <span class="font-bold">Options</span>
            <img src="@/images/Arrow.svg" alt="Arrow svg">
        </DefaultButton>
        <NewTasklist @newTask="toggleNewTaskWindow" class="max-h-full"/>
        <TaskOptionsSmall v-show="showOptions" class="absolute mt-15 w-5/6"/>
    </div>
</template>