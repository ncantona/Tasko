<script setup>
import DefaultButton from './DefaultButton.vue';

</script>

<template>
    <div class="flex flex-row gap-20">
        <div class="flex flex-col justify-start w-2/10 items-center gap-2">
            <img src="@/images/DefaultProfilePicture.svg" alt="Profile Picture" class="w-5/6 rounded-full">
            <span>@PH-username</span>
            <span>Vorname Nachname PH</span>
            <span>Email Adresse PH</span>
            <RouterLink to="editProfile">
                <DefaultButton class="hover:text-blue-600 border-1 p-3 rounded-xl mt-2"
                    @click="changeRoute">
                    edit Profile
                </DefaultButton>
            </RouterLink>
        </div>
        <div class="flex flex-col gap-2">
            <span>My current Tasklists</span>
            <span>Shared Tasklists</span>
            <span>Previous Tasklists</span>
        </div>
    </div>
</template>