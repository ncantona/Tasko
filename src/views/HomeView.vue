<script setup>
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import TasklistSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
    import { ref, onMounted, onUnmounted, computed } from 'vue';

    const windowWidth = ref(window.innerWidth);
    console.log(windowWidth);

    const handleResize = () => {
        windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });

    const isMobile = computed(() => windowWidth.value < 768);
</script>

<template>
    <div>
        <CustomHeader>My Tasklists</CustomHeader>
        <div v-if="isMobile" class="flex flex-col justify-center ">
            <TasklistSmall class="mt-5"/>
        </div>
        <div v-if="!isMobile">
            
        </div>
    </div>
</template>