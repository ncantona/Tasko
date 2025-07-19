<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CurrentTasksLists from '@/components/Profile/CurrentTasksLists.vue';
    import CustomHeader from '@/components/SmallComponents/CustomHeader.vue';
    import SharedTaskLists from '@/components/Profile/SharedTaskLists.vue';
    import { useUserStore } from '@/stores/useUserStore';

    const { user } = useUserStore();
</script>

<template>
    <div>
        <CustomHeader>Profile</CustomHeader>
        <div class="flex flex-col gap-10 md:flex-row">
            <div class="flex flex-col justify-start items-center md:items-start md:w-2/10 gap-2">
                <img
                    src="@/assets/images/DefaultProfilePicture.svg"
                    alt="Profile Picture"
                    class="w-5/6 rounded-full max-w-40 min-w-30"
                >
                <span class="font-bold text-xl">@{{ user.username }} #{{ user.id }}</span>
                <div class="flex flex-col">
                    <span>{{ user.firstName }}</span>
                    <span>{{ user.lastName }}</span>
                </div>
                <RouterLink to="editProfile">
                    <CustomSubmitButton>Edit Profile</CustomSubmitButton>
                </RouterLink>
            </div>
            <div class="flex flex-col gap-2 w-full max-w-200">
                <CurrentTasksLists/>
                <SharedTaskLists/>
            </div>
        </div>
    </div>
</template>