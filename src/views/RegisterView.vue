<script setup>
    import Register from '@/components/Register.vue';
    import RegisterSuccess from '@/components/RegisterSuccess.vue';
    import { ref } from 'vue';
    
    const activeSection = ref('register');
</script>

<template>
    <div class="flex w-full justify-center">
        <Register v-if="activeSection === 'register'" @register-success="activeSection = 'success'"/>
        <RegisterSuccess v-if="activeSection === 'success'"/>
    </div>
</template>