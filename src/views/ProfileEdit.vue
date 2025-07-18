<script setup>
    import CustomHeader from '@/components/SmallComponents/CustomHeader.vue';
    import UpdateProfile from '@/components/Profile/UpdateProfile.vue';
    import UpdateImage from '@/components/Profile/UpdateImage.vue';
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