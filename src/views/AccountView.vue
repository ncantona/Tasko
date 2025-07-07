<script setup>
    import ChangeEmail from '@/components/ChangeEmail.vue';
    import ChangePassword from '@/components/ChangePassword.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { ref } from 'vue';
    
    const activeSection = ref('password');
</script>

<template>
    <div>
        <CustomHeader>Account Settings</CustomHeader>
        <div class="flex flex-row gap-5 justify-center mb-4">
            <DefaultButton
                @click="activeSection = 'password'"
                :class="['text-2xl font-bold', activeSection === 'password' ? 'text-blue-500' : 'text-black']">
                Password
            </DefaultButton>
            <DefaultButton
                @click="activeSection = 'email'"
                :class="['text-2xl font-bold', activeSection === 'email' ? 'text-blue-500' : 'text-black']">
                Email
            </DefaultButton>
        </div>
        <div class="flex flex-col gap-5 max-w-100 md:max-w-250 mx-auto">
            <ChangePassword v-if="activeSection === 'password'"/>
            <ChangeEmail v-if="activeSection === 'email'"/>
            <div class="self-center">
                <DefaultButton
                    class="text-red-600 hover:text-red-400">
                    Delete Account
                </DefaultButton>
            </div>
        </div>
    </div>
</template>