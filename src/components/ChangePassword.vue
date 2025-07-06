<script setup>
    import DefaultButton from './small/DefaultButton.vue';
</script>

<template>
    <div class="border-1 rounded-xl md:border-none p-4">
        <div class="flex flex-col md:flex-row justify-center gap-10">
            <div>
                <ul class="flex flex-col md:flex-row md:gap-5">
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="currentPassword">Current Password*</label>
                        <input type="password" id="currentPassword" name="currentPassword" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500">
                    </li>
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="newPassword">New Password*</label>
                        <input type="password" id="newPassword" name="newPassword" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500">
                    </li>
                    <li class="flex flex-col gap-2 mb-3">
                        <label for="retypePassword">Retype Password*</label>
                        <input type="password" id="retypePassword" name="retypePassword" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500">
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-row justify-center items-cente mt-5">
            <DefaultButton class="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                @click="changeRoute">
                Change Password
            </DefaultButton>
        </div>
    </div>
</template>