<script setup>
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import UpdateImage from '@/components/UpdateImage.vue';
    import UpdateProfile from '@/components/UpdateProfile.vue';
</script>

<template>
    <div>
        <CustomHeader>Edit Profile</CustomHeader>
        <div class="flex flex-col md:flex-row justify-center gap-10 md:items-center">
            <UpdateImage/>
            <UpdateProfile/>
        </div>
    </div>
</template>