<script setup>
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import PopupWindow from '@/components/General/PopupWindow.vue';
    import axios from 'axios';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');
    const user = useUserStore();
    const showSuccess = ref(false);
    const showError = ref('');

    const handleSubmit = async () => {
        try {
            await user.login({email: user.user.email, password: password.value}).catch(() => {throw ('Wrong Password')});
            const userData = {
                username: user.user.username,
                firstName: user.user.firstName,
                lastName: user.user.lastName,
                email: email.value
            };
            await user.updateUser(userData);
            showSuccess.value = true;
        } catch (error) {
            if (axios.isAxiosError(error))
                showError.value = error.response?.data?.message || error.message;
            else
                showError.value = error;
        }
        email.value = '';
        password.value = '';
    }
</script>

<template>
    <div class="bg-white/50 shadow-xl rounded-xl p-8">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-5">
                <span><b>Registered Email:</b> {{ user.user.email }}</span>
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <CustomInputText
                        v-model="email"
                        type="email"
                        label="New Email*"
                        name="newEmail"
                    />
                    <CustomInputText
                        v-model="password"
                        type="password"
                        label="Confirm Your Password*"
                        name="password"
                    />
                </div>
                <CustomButtonSubmit>Change Email</CustomButtonSubmit>
            </form>
        </div>
        <PopupWindow
            v-if="showSuccess"
            @close="showSuccess = false"
            type="success">
            Email change successful
        </PopupWindow>
        <PopupWindow
            v-if="showError"
            @close="showError = ''"
            type="error">
            {{ showError }}
        </PopupWindow>
    </div>
</template>