<script setup>
    import Login from '@/components/Login.vue';
    import ResetPassword from '@/components/ResetPassword.vue';
    import { ref } from 'vue';

    const showResetPassword = ref(false);

    const toggleView = () => {
        showResetPassword.value = !showResetPassword.value;
    }
</script>

<template>
    <div class="flex w-full justify-center">
        <Login v-if="!showResetPassword" @resetClick="toggleView"/>
        <ResetPassword v-if="showResetPassword" @loginClick="toggleView"/>
    </div>
</template>