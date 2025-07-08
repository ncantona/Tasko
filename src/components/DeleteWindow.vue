<script setup>
import CustomButtonSubmit from './small/CustomButtonSubmit.vue';
import DefaultButton from './small/DefaultButton.vue';

</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black/50">
        <div class="bg-white p-8 rounded shadow-md text-center w-5/6 max-w-150 flex flex-col gap-5">
            <span class="text-xl">Are you sure you want to permanently delete your account?</span>
            <div class="flex justify-center gap-5">
                <DefaultButton @click="$emit('cancel')" class="text-blue-600 hover:text-blue-500">cancel</DefaultButton>
                <CustomButtonSubmit @click="$emit('delete')" class="bg-red-600 hover:bg-red-500">Yes, Delete my account</CustomButtonSubmit>
            </div>
        </div>
    </div>
</template>