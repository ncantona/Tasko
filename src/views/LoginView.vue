<script setup>
    import ResetPassword from '@/components/LoginRegister/ResetPassword.vue';
    import Login from '@/components/LoginRegister/Login.vue';
    import { ref } from 'vue';

    const showResetPassword = ref(false);
    const toggleView = () => showResetPassword.value = !showResetPassword.value;
</script>

<template>
    <div class="flex w-full justify-center">
        <Login
            v-if="!showResetPassword"
            @resetClick="toggleView"
        />
        <ResetPassword
            v-if="showResetPassword"
            @loginClick="toggleView"
        />
    </div>
</template>