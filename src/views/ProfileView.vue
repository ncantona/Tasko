<script setup>
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import CurrentTasksLists from '@/components/CurrentTasksLists.vue';
    import SharedTaskLists from '@/components/SharedTaskLists.vue';
    import PreviousTaskLists from '@/components/PreviousTaskLists.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
</script>

<template>
    <div>
        <CustomHeader>Profile</CustomHeader>
        <div class="flex flex-col gap-20 md:flex-row">
            <div class="flex flex-col justify-start md:w-2/10 items-center gap-2">
                <img src="@/images/DefaultProfilePicture.svg" alt="Profile Picture" class="w-5/6 rounded-full max-w-40 min-w-30">
                <span>@PH-username</span>
                <div class="flex flex-col">
                    <span>Vorname PH</span>
                    <span>Nachname PH</span>
                </div>
                <RouterLink to="editProfile">
                    <DefaultButton class="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 mt-2"
                        @click="changeRoute">
                        edit Profile
                    </DefaultButton>
                </RouterLink>
            </div>
            <div class="flex flex-col gap-2 w-full">
                <CurrentTasksLists/>
                <SharedTaskLists/>
                <PreviousTaskLists/>
            </div>
        </div>
    </div>
</template>