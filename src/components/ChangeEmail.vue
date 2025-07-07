<script setup>
    import CustomInputText from './small/CustomInputText.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
        console.log(email.value);
        console.log(password.value);
        email.value = '';
        password.value = '';
    }
</script>

<template>
    <div class="bg-white/50 shadow-xl rounded-xl p-8">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center gap-5">
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
    </div>
</template>