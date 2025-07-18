<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import CancelButton from '@/components/SmallComponents/CancelButton.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { useUserStore } from '@/stores/useUserStore';
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    const userStore = useUserStore();
    const popupStore = usePopupStore();

    const username = ref(`${userStore.user.username}`);
    const firstName = ref(`${userStore.user.firstName}`);
    const lastName = ref(`${userStore.user.lastName}`);


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
            if (error.response && error.response.data && error.response.data.message)
                popupStore.error = String(error.response.data.message);
            else
                popupStore.error = String(error.message);
        }
    }
</script>

<template>
    <form
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-5 bg-white/60 shadow-xl rounded-xl p-8">
        <CustomInputField
            v-model="username"
            type="text"
            label="Username"
            name="username"
            :required="false"
        />
        <div class="flex flex-col md:flex-row gap-5">
            <CustomInputField
                v-model="firstName"
                type="text"
                label="First Name"
                name="firstName"
                :required="false"
            />
            <CustomInputField
                v-model="lastName"
                type="text"
                label="Last Name"
                name="lastName"
                :required="false"
            />
        </div>
        <div class="flex flex-row justify-center gap-5 items-center">
            <RouterLink to="profile"
                type="button">
                <CancelButton/>
            </RouterLink>
            <CustomSubmitButton
                @click="handleSubmit">
                Save changes
            </CustomSubmitButton>
        </div>
    </form>
</template>