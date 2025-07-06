<script setup>
    import { ref } from 'vue';
    import DefaultButton from '@/components/DefaultButton.vue';
    import { RouterLink } from 'vue-router';
    import CustomHeader from '@/components/CustomHeader.vue';

    let pictureExists = ref(false);
</script>

<template>
    <div>
        <CustomHeader>Edit Profile</CustomHeader>
        <div class="flex flex-col md:flex-row justify-center gap-10">
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
            <div>
                <ul>
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="username">Username*</label>
                        <input type="text" id="username" name="username" class="border-1 rounded-sm outline-none p-2 w-full">
                    </li>
                    <div class="flex flex-col md:flex-row md:gap-5">
                        <li class="flex flex-col gap-2 mb-3">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" class="border-1 rounded-sm outline-none p-2">
                        </li>
                        <li class="flex flex-col gap-2 mb-3">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" class="border-1 rounded-sm outline-none p-2">
                        </li>
                    </div>
                </ul>
            </div>
        </div>
        <div class="flex flex-row justify-center gap-5 items-cente mt-10">
            <RouterLink to="profile">
                <DefaultButton class="text-blue-600 hover:text-blue-500"
                    @click="changeRoute">
                    Cancel
                </DefaultButton>
            </RouterLink>
            <DefaultButton class="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                @click="changeRoute">
                Save changes
            </DefaultButton>
        </div>
    </div>
</template>