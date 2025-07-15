<script setup>
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import TasklistSmall from '@/components/TasklistsSmall/TasklistSmall.vue';
</script>

<template>
    <div>
        <CustomHeader>My Tasklists</CustomHeader>
        <div class="flex flex-col justify-center md:hidden">
            <TasklistSmall class="mt-5"/>
        </div>
    </div>
</template>