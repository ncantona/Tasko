<script setup>
    import { ref } from 'vue';
    import DefaultButton from '@/components/DefaultButton.vue';
    import { RouterLink } from 'vue-router';

    let pictureExists = ref(false);

</script>

<template>
    <div class="flex flex-col gap-10">
        <div class="flex flex-row justify-between pb-10 border-b-1 ">
            <h1 class="text-4xl font-bold">Edit Profile</h1>
            <RouterLink to="editProfile">
                <DefaultButton class="text-blue-600 hover:text-blue-500">
                    Cancel
                </DefaultButton>
            </RouterLink>
        </div>
        <div class="flex flex justify-center gap-10">
            <div class="flex flex-col justify-start w-2/10 items-center relative">
                <DefaultButton v-show="pictureExists"
                    @click="removePhoto">
                    <img src="@/images/Remove.svg" alt="Remove Button" class="absolute right-6 top-6 w-8 h-8">
                </DefaultButton>
                <img src="@/images/DefaultProfilePicture.svg" alt="Profile Picture" class="w-5/6 rounded-full">
                <DefaultButton class="text-blue-600 hover:text-blue-500 mt-2"
                    @click="changePhoto">
                    choose Photo
                </DefaultButton>
            </div>
            <div>
                <ul>
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="username">Username*</label>
                        <input type="text" id="username" name="username" class="border-1 rounded-sm outline-none p-2 w-full">
                    </li>
                    <div class="flex flex-row gap-5">
                        <li class="flex flex-col gap-2 mb-3">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" class="border-1 rounded-sm outline-none p-2">
                        </li>
                        <li class="flex flex-col gap-2 mb-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" class="border-1 rounded-sm outline-none p-2">
                        </li>
                    </div>
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="email">E-Mail*</label>
                        <input type="text" id="email" name="email" class="border-1 rounded-sm outline-none p-2">
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row justify-center gap-5">
            <DefaultButton class="text-blue-600 hover:text-blue-500"
                @click="changeRoute">
                Cancel
            </DefaultButton>
            <DefaultButton class="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                @click="changeRoute">
                Save changes
            </DefaultButton>
        </div>
    </div>
</template>