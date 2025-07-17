<script setup>
    import CurrentTasksLists from '@/components/Profile/CurrentTasksLists.vue';
    import SharedTaskLists from '@/components/Profile/SharedTaskLists.vue';
    import PreviousTaskLists from '@/components/Profile/PreviousTaskLists.vue';
    import CustomHeader from '@/components/small/CustomHeader.vue';
    import { useUserStore } from '@/stores/useUserStore';

    const { user } = useUserStore();
</script>

<template>
    <div>
        <CustomHeader>Profile</CustomHeader>
        <div class="flex flex-col gap-10 md:flex-row">
            <div class="flex flex-col justify-start items-center md:items-start md:w-2/10 gap-2">
                <img src="@/images/DefaultProfilePicture.svg" alt="Profile Picture" class="w-5/6 rounded-full max-w-40 min-w-30">
                <span class="font-bold text-xl">@{{ user.username }}</span>
                <div class="flex flex-col">
                    <span>{{ user.firstName }}</span>
                    <span>{{ user.lastName }}</span>
                </div>
                <RouterLink to="editProfile" class="p-2 bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-500 mt-2">
                    Edit Profile
                </RouterLink>
            </div>
            <div class="flex flex-col gap-2 w-full max-w-200">
                <CurrentTasksLists/>
                <SharedTaskLists/>
                <PreviousTaskLists/>
            </div>
        </div>
    </div>
</template>