<script setup>
    import DefaultButton from './small/DefaultButton.vue';
</script>

<template>
    <div class="flex flex-col justify-start md:w-2/10 items-center relative">
        <img src="@/images/DefaultProfilePicture.svg" alt="Profile Picture" class="w-5/6 rounded-full max-w-70 min-w-40">
        <div class="flex flex-row items-center mt-2">
            <DefaultButton v-show="pictureExists"
                @click="removePhoto">
                <img src="@/images/Remove.svg" alt="Remove Button" class="w-4/6">
            </DefaultButton>
            <DefaultButton class="text-blue-600 hover:text-blue-500"
                @click="changePhoto">
                choose Photo
            </DefaultButton>
        </div>
    </div>
</template>