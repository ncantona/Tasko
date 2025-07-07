<script setup>
    import DefaultButton from './small/DefaultButton.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import CustomInputText from './small/CustomInputText.vue';
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');

    const handleSubmit = () => {
        console.log(username.value);
        console.log(password.value);
        username.value = '';
        password.value = '';
    }
</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Login</span>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 bg-white/50 shadow-xl rounded-lg p-5">
            <CustomInputText
                v-model="username"
                type="text"
                label="Username"
                name="username"
                />
            <CustomInputText
                v-model="password"
                type="password"
                label="Password"
                name="password"
                />
            <div class="flex justify-between pl-3 pr-3">
                <DefaultButton @click="$emit('resetClick')"
                    type="button"
                    class="text-blue-600 hover:text-blue-500">
                    forgot Password
                </DefaultButton>
                <RouterLink to="register">
                    <DefaultButton
                        type="button"
                        class="text-blue-600 hover:text-blue-500">
                        register
                    </DefaultButton>
                </RouterLink>
            </div>
            <CustomButtonSubmit>Login</CustomButtonSubmit>
        </form>
    </div>
</template>