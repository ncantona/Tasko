<script setup>
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import NewTasklistWindow from './NewTasklistWindow.vue';
    import { ref } from 'vue';

    const showNewTasklistWindow = ref(false);

    const toggleNewTasklistWindow = () => showNewTasklistWindow.value = !showNewTasklistWindow.value;
</script>

<template>
    <div>
        <DefaultButton 
            @click="toggleNewTasklistWindow"
            class="bg-white/50 shadow-xl rounded-xl p-4 h-full">
            <img src="@/images/Plus.svg" alt="Plus svg" class="w-8">
        </DefaultButton>
        <NewTasklistWindow v-if="showNewTasklistWindow" @close="toggleNewTasklistWindow"></NewTasklistWindow>
    </div>
</template>