<script setup>
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import axios from 'axios';
    import { useUserStore } from '@/stores/useUserStore';
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const userStore = useUserStore();
    const username = ref(`${userStore.user.username}`);
    const firstName = ref(`${userStore.user.firstName}`);
    const lastName = ref(`${userStore.user.lastName}`);
    const popupStore = usePopupStore();

    const handleSubmit = async () => {
        if (!username.value.length && !firstName.value.length && !lastName.value.length)
            return ;
        const userData = {
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: userStore.user.email
        };
        try {
            await userStore.updateUser(userData);
            popupStore.success = 'Profile updated successfully'
        } catch (error) {
            if (axios.isAxiosError(error))
                popupStore.error = error.response?.data?.message || error.message;
            else
                popupStore.error = error;
        }
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
                class="text-blue-600 hover:text-blue-500">
                Cancel
            </RouterLink>
            <CustomButtonSubmit
                @click="handleSubmit">
                Save changes
            </CustomButtonSubmit>
        </div>
    </form>
</template>