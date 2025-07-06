<script setup>
    import ChangeEmail from '@/components/ChangeEmail.vue';
import ChangePassword from '@/components/ChangePassword.vue';
    import CustomHeader from '@/components/CustomHeader.vue';
</script>

<template>
    <div>
        <CustomHeader>Account Settings</CustomHeader>
        <div class="flex flex-col gap-10 md:gap-0 max-w-250 mx-auto">
            <ChangePassword/>
            <ChangeEmail/>
        </div>
    </div>
</template>