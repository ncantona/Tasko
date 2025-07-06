<script setup>
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import CustomInputText from './small/CustomInputText.vue';
    import DefaultButton from './small/DefaultButton.vue';
    import { ref } from 'vue';

    const email = ref('');
    const username = ref('');
    const password = ref('');
    const retypePassword = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const termsAccepted = ref(false);

    const handleSubmit = () => {
        console.log(username.value);
        console.log(password.value);
        username.value = '';
        password.value = '';
    }
</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Register</span>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 border-1 rounded-lg p-5">
            <CustomInputText
                v-model="email"
                type="email"
                label="Email*"
                name="email"
            />
            <CustomInputText
                v-model="username"
                type="text"
                label="Username*"
                name="username"
            />
            <CustomInputText
                v-model="password"
                type="password"
                label="Password*"
                name="password"
            />
            <CustomInputText
                v-model="retypePassword"
                type="password"
                label="Retype Password*"
                name="retypePassword"
            />
            <CustomInputText
                v-model="firstName"
                type="text"
                label="First Name (optional)"
                name="firstName"
            />
            <CustomInputText
                v-model="lastName"
                type="text"
                label="Last Name (optional)"
                name="lastName"
            />
            <CustomInputText class="flex flex-row-reverse justify-center"
                v-model="termsAccepted"
                type="checkbox"
                label="I accept the Terms and Conditions"
                name="termsAccepted"
            />
            <CustomButtonSubmit>Register</CustomButtonSubmit>
        </form>
        <RouterLink to="login" class="self-center">
            <DefaultButton class="text-blue-600 hover:text-blue-500">Back to Login</DefaultButton>
        </RouterLink>
    </div>
</template>