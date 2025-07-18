<script setup>
    import CustomHeader from '@/components/SmallComponents/CustomHeader.vue';
    import Tasklists from '@/components/Tasklists/Tasklists.vue';
</script>

<template>
    <div>
        <CustomHeader>My Tasklists</CustomHeader>
        <div class="flex flex-col justify-center ">
            <Tasklists class="mt-5"/>
        </div>
    </div>
</template>