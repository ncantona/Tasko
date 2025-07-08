<script setup>
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import PopupWindow from '@/components/PopupWindow.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import axios from 'axios';
    import { useUserStore } from '@/stores/useUserStore';
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const user = useUserStore();
    const username = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const showSuccess = ref(false);
    const showError = ref('');

    const handleSubmit = async () => {
        if (!username.value.length && !firstName.value.length && !lastName.value.length)
            return ;
        const userData = {
            username: username.value ? username.value : user.user.username,
            firstName: firstName.value ? firstName.value : user.user.firstName,
            lastName: lastName.value ? lastName.value : user.user.lastName,
            email: user.user.email
        };
        try {
            await user.updateUser(userData);
            showSuccess.value = true;
        } catch (error) {
            if (axios.isAxiosError(error))
                showError.value = error.response?.data?.message || error.message;
            else
                showError.value = error;
        }
        username.value = '';
        firstName.value = '';
        lastName.value = '';
    }
</script>

<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-xl p-8">
        <CustomInputText
            v-model="username"
            type="text"
            label="Username"
            name="username"
            :required="false"
        />
        <div class="flex flex-col md:flex-row gap-5">
            <CustomInputText
                v-model="firstName"
                type="text"
                label="First Name"
                name="firstName"
                :required="false"
            />
            <CustomInputText
                v-model="lastName"
                type="text"
                label="Last Name"
                name="lastName"
                :required="false"
            />
        </div>
        <div class="flex flex-row justify-center gap-5 items-center">
            <RouterLink to="profile"
                type="button"
                class="text-blue-600 hover:text-blue-500"
                @click="changeRoute">
                Cancel
            </RouterLink>
            <CustomButtonSubmit
                @click="handleSubmit">
                Save changes
            </CustomButtonSubmit>
        </div>
        <PopupWindow
            v-if="showSuccess"
            @close="showSuccess = false"
            type="success">
            Profile update successful
        </PopupWindow>
        <PopupWindow
            v-if="showError"
            @close="showError = ''"
            type="error">
            {{ showError }}
        </PopupWindow>
    </form>
</template>