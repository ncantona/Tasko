<script setup>
    import CustomInputText from './small/CustomInputText.vue';
    import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
</script>

<template>
    <div class="border-1 rounded-xl md:border-none p-4">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <form class="flex flex-col justify-center items-center gap-5">
                <div class="flex flex-col md:flex-row gap-5 w-full">
                    <CustomInputText type="email" label="New Email*" name="newEmail"/>
                    <CustomInputText type="password" label="Confirm Your Password*" name="password"/>
                </div>
                <CustomButtonSubmit @submit="sendBackEnd">Change Email</CustomButtonSubmit>
            </form>
        </div>
    </div>
</template>