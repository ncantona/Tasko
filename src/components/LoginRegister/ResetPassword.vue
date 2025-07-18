<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import { ref } from 'vue';

    const email = ref('');
</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Reset Password</span>
        <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-lg p-5">
            <CustomInputField
                v-model="email"
                type="email"
                label="Email*"
                name="email"
                />
            <div class="flex justify-between pl-3 pr-3">
                <DefaultButton
                    @click="$emit('loginClick')"
                    type="button"
                    class="text-blue-600 hover:text-blue-500">
                    Back to Login
                </DefaultButton>
                <RouterLink to="register" class="text-blue-600 hover:text-blue-500">
                    register
                </RouterLink>
            </div>
            <CustomSubmitButton>Reset Password</CustomSubmitButton>
        </form>
    </div>
</template>