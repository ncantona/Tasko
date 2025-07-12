<script setup>
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { URL } from '@/API/Url.vue';
    import { ref } from 'vue';
    import axios from 'axios';

    const email = ref('');
    const username = ref('');
    const password = ref('');
    const retypePassword = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const termsAccepted = ref(false);
    
    const emit = defineEmits(['registerSuccess']);

/*     const handleSubmit = async () => {
        const formObj = {
            email: email.value,
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            termsAccepted: termsAccepted.value
        };
        try {
            const response = await fetch(`${URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObj)
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw Error(errorData.message);
            }
            emit('registerSuccess');
        } catch (error) {
            alert(error);
        };
    } */

    const handleSubmit = async () => {
        const formObj = {
            email: email.value,
            username: username.value,
            password: password.value,
            firstName: firstName.value,
            lastName: lastName.value,
            termsAccepted: termsAccepted.value
        };
        try {
            const response = await axios.post(`${URL}/api/auth/register`, formObj);
            emit('registerSuccess');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message)
                alert(error.response.data.message);
            else
                alert(error.message);
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
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Register</span>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-lg p-5">
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
                :required="false"
            />
            <CustomInputText
                v-model="lastName"
                type="text"
                label="Last Name (optional)"
                name="lastName"
                :required="false"
            />
            <CustomInputText class="flex flex-row-reverse justify-center items-center"
                v-model="termsAccepted"
                type="checkbox"
                label="I accept the Terms and Conditions"
                name="termsAccepted"
            />
            <CustomButtonSubmit>Register</CustomButtonSubmit>
        </form>
        <RouterLink to="login" class="self-center">
            <DefaultButton
                class="text-blue-600 hover:text-blue-500">
                Back to Login
            </DefaultButton>
        </RouterLink>
    </div>
</template>