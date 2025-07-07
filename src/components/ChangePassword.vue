<script setup>
    import CustomInputText from './small/CustomInputText.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const currentPassword = ref('');
    const newPassword = ref('');
    const retypePassword = ref('');
    const user = useUserStore();

    const handleSubmit = async () => {
        try {
            await user.login({email: user.user.email, password: currentPassword.value}).catch(() => {throw ('Wrong Password')});
            if (newPassword.value != retypePassword.value)
                throw ('Passwords are not the same');
            await user.changeUserPassword(newPassword.value);
            alert('Password was changed');
        } catch (error) {
            alert(error);
        }
        currentPassword.value = '';
        newPassword.value = '';
        retypePassword.value = '';
    }
</script>

<template>
    <div class="border-1 rounded-xl md:border-none p-4">
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
            </form>
        </div>
    </div>
</template>