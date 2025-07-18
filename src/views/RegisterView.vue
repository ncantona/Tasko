<script setup>
    import RegisterSuccess from '@/components/LoginRegister/RegisterSuccess.vue';
    import Register from '@/components/LoginRegister/Register.vue';
    import { ref } from 'vue';
    
    const activeSection = ref('register');
</script>

<template>
    <div class="flex w-full justify-center">
        <Register
            v-if="activeSection === 'register'"
            @registerSuccess="activeSection = 'success'"
        />
        <RegisterSuccess
            v-if="activeSection === 'success'"
        />
    </div>
</template>