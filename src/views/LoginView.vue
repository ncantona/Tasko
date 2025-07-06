<script setup>
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
</script>

<template>
    <div class="flex flex-col justify-center gap-3 w-5/6 max-w-100">
        <span class="text-3xl font-bold self-center">Login</span>
        <div class="flex flex-col gap-5 border-1 rounded-lg p-5">
            <CustomInputText type="text" label="Username" name="username"/>
            <CustomInputText type="password" label="Password" name="password"/>
            <CustomButtonSubmit>Login</CustomButtonSubmit>
        </div>
    </div>
</template>