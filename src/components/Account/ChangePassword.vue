<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const currentPassword = ref('');
    const newPassword = ref('');
    const retypePassword = ref('');

    const userStore = useUserStore();
    const popupStore = usePopupStore();

    const handleSubmit = async () => {
        try {
            await userStore.login({email: userStore.user.email, password: currentPassword.value})
                .catch(() => {throw Error('Wrong Password')});
            if (currentPassword.value === newPassword.value)
                throw Error('New password matches current password');
            if (newPassword.value != retypePassword.value)
                throw Error('Passwords are not the same');
            await userStore.changeUserPassword(newPassword.value);
            popupStore.success = 'Your password has been updated successfully';
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message)
                popupStore.error = String(error.response.data.message);
            else
                popupStore.error = String(error.message);
            console.log(error);
        }
        currentPassword.value = '';
        newPassword.value = '';
        retypePassword.value = '';
    }
</script>

<template>
    <div class="flex flex-col md:flex-row justify-center gap-10 bg-white/60 shadow-xl rounded-xl p-8 md:-mx-15 lg:mx-0">
        <form
            @submit.prevent="handleSubmit"
            class="flex flex-col justify-center items-center gap-5">
            <div class="flex flex-col md:flex-row gap-5 w-full">
                <CustomInputField
                    v-model="currentPassword"
                    type="password"
                    label="Current Password*"
                    name="currentPassword"
                />
                <CustomInputField
                    v-model="newPassword"
                    type="password"
                    label="New Password*"
                    name="newPassword"
                />
                <CustomInputField
                    v-model="retypePassword"
                    type="password"
                    label="Retype Password*"
                    name="retypePassword"
                />
            </div>
            <CustomSubmitButton>Change Password</CustomSubmitButton>
        </form>
    </div>
</template>