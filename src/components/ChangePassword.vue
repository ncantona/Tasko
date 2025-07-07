<script setup>
    import CustomInputText from './small/CustomInputText.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import PopupWindow from './PopupWindow.vue';
    import axios from 'axios';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const currentPassword = ref('');
    const newPassword = ref('');
    const retypePassword = ref('');
    const showSuccess = ref(false);
    const showError = ref('');
    const user = useUserStore();

    const handleSubmit = async () => {
        try {
            await user.login({email: user.user.email, password: currentPassword.value}).catch(() => {throw ('Wrong Password')});
            if (newPassword.value != retypePassword.value)
                throw ('Passwords are not the same');
            await user.changeUserPassword(newPassword.value);
            showSuccess.value = true;
        } catch (error) {
            if (axios.isAxiosError(error))
                showError.value = error.response?.data?.message || error.message;
            else
                showError.value = error;
        }
        currentPassword.value = '';
        newPassword.value = '';
        retypePassword.value = '';
    }
</script>

<template>
    <div class="bg-white/50 shadow-xl rounded-xl p-8">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-5">
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <CustomInputText
                        v-model="currentPassword"
                        type="password"
                        label="Current Password*"
                        name="currentPassword"
                    />
                    <CustomInputText
                        v-model="newPassword"
                        type="password"
                        label="New Password*"
                        name="newPassword"
                    />
                    <CustomInputText
                        v-model="retypePassword"
                        type="password"
                        label="Retype Password*"
                        name="retypePassword"
                    />
                </div>
                <CustomButtonSubmit>Change Password</CustomButtonSubmit>
                <PopupWindow
                    v-if="showSuccess"
                    @close="showSuccess = false"
                    type="success">
                    Password change successful
                </PopupWindow>
                <PopupWindow
                    v-if="showError"
                    @close="showError = ''"
                    type="error">
                    {{ showError }}
                </PopupWindow>
            </form>
        </div>
    </div>
</template>