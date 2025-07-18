<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CustomInputField from '@/components/SmallComponents/CustomInputField.vue';
    import { usePopupStore } from '@/stores/usePopupStore';
    import { useUserStore } from '@/stores/useUserStore';
    import { ref } from 'vue';

    const emits = defineEmits(['registerSuccess']);

    const email = ref('');
    const username = ref('');
    const password = ref('');
    const retypePassword = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const termsAccepted = ref(false);

    const popupStore = usePopupStore();
    const userStore = useUserStore();

    const handleSubmit = async () => {
        const userData = {
            email: email.value,
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            termsAccepted: termsAccepted.value
        };
        try {
            if (password.value != retypePassword.value)
                throw Error('Password does not match');
            await userStore.register(userData);
            emits('registerSuccess');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message)
                popupStore.error = String(error.response.data.message);
            else
                popupStore.error = String(error.message);
        }
        email.value = '';
        username.value = '';
        password.value = '';
        retypePassword.value = '';
        firstName.value = '';
        lastName.value = '';
        termsAccepted.value = '';
    }

</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100 my-20">
        <span class="text-3xl font-bold self-center">Register</span>
        <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-lg p-5">
            <CustomInputField
                v-model="email"
                type="email"
                label="Email*"
                name="email"
            />
            <CustomInputField
                v-model="username"
                type="text"
                label="Username*"
                name="username"
            />
            <CustomInputField
                v-model="password"
                type="password"
                label="Password*"
                name="password"
            />
            <CustomInputField
                v-model="retypePassword"
                type="password"
                label="Retype Password*"
                name="retypePassword"
            />
            <CustomInputField
                v-model="firstName"
                type="text"
                label="First Name (optional)"
                name="firstName"
                :required="false"
            />
            <CustomInputField
                v-model="lastName"
                type="text"
                label="Last Name (optional)"
                name="lastName"
                :required="false"
            />
            <CustomInputField class="flex flex-row-reverse justify-center items-center"
                v-model="termsAccepted"
                type="checkbox"
                label="I accept the Terms and Conditions"
                name="termsAccepted"
            />
            <CustomSubmitButton>Register</CustomSubmitButton>
        </form>
        <RouterLink to="login" class="self-center text-blue-600 hover:text-blue-500">
                Back to Login
        </RouterLink>
    </div>
</template>