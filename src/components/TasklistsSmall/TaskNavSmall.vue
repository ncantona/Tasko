<script setup>
    import { ref } from 'vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import TaskOptionsSmall from '@/components/TasklistsSmall/TaskOptionsSmall.vue';

    const showOptions = ref(false);
    const toggleOptionWindow = () => showOptions.value = !showOptions.value;

</script>

<template>
    <div>
        <DefaultButton @click="toggleOptionWindow" class="w-full bg-white/50 shadow-xl rounded-xl p-4 flex flex-row justify-between">
            <span class="font-bold">Options</span>
            <img src="@/images/Arrow.svg" alt="Arrow svg">
        </DefaultButton>
        <TaskOptionsSmall v-show="showOptions" class="absolute mt-2 w-5/6"/>
    </div>
</template>