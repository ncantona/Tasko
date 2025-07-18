<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { useUserStore } from '@/stores/useUserStore';
    import router from '@/router';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');

    const userStore = useUserStore();
    const popupStore = usePopupStore();

    const handleSubmit = async () => {
        const objForm = {
            email: email.value,
            password: password.value
        };
        try {
            await userStore.login(objForm);
            router.go('home');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message)
                popupStore.error = String(error.response.data.message);
            else
                popupStore.error = String(error.message);
        }
        password.value = '';
    }
</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Login</span>
        <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-lg p-5">
            <CustomInputField
                v-model="email"
                type="email"
                label="Email"
                name="email"
                />
            <CustomInputField
                v-model="password"
                type="password"
                label="Password"
                name="password"
                />
            <div class="flex justify-between pl-3 pr-3">
                <DefaultButton
                    @click="$emit('resetClick')"
                    type="button"
                    class="text-blue-600 hover:text-blue-500">
                    forgot Password
                </DefaultButton>
                <RouterLink
                    to="register"
                    class="text-blue-600 hover:text-blue-500">
                    register
                </RouterLink>
            </div>
            <CustomSubmitButton>Login</CustomSubmitButton>
        </form>
    </div>
</template>