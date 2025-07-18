<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');

    const userStore = useUserStore();
    const popupStore = usePopupStore();

    const handleSubmit = async () => {
        try {
            await userStore.login({email: userStore.user.email, password: password.value})
                .catch(() => {throw Error('Wrong Password')});
            const userData = {
                username: userStore.user.username,
                firstName: userStore.user.firstName,
                lastName: userStore.user.lastName,
                email: email.value
            };
            await userStore.updateUser(userData);
            popupStore.success = 'Your email has been updated successfully'
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message)
                popupStore.error = String(error.response.data.message);
            else
                popupStore.error = String(error.message);
        }
        email.value = '';
        password.value = '';
    }
</script>

<template>
        <div class="flex flex-col md:flex-row justify-center gap-10 bg-white/60 shadow-xl rounded-xl p-8">
            <form
                @submit.prevent="handleSubmit"
                class="flex flex-col justify-center items-center gap-5">
                <span><b>Registered Email:</b> {{ userStore.user.email }}</span>
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <CustomInputField
                        v-model="email"
                        type="email"
                        label="New Email*"
                        name="newEmail"
                    />
                    <CustomInputField
                        v-model="password"
                        type="password"
                        label="Confirm Your Password*"
                        name="password"
                    />
                </div>
                <CustomSubmitButton>Change Email</CustomSubmitButton>
            </form>
        </div>
</template>