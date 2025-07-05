<script setup>
    import ProfileNav from './ProfileNav.vue';
    import DefaultButton from './DefaultButton.vue';
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    let showProfileOpt = ref(false);
    const toggleDropdown = () => showProfileOpt.value = !showProfileOpt.value;

</script>

<template>
    <div class="flex justify-between text-xl mt-4 text-black w-full">
        <DefaultButton
            @click="changeRoute"
            class="text-2xl">
            Tasko
        </DefaultButton>
        <div class="relative">
        <DefaultButton
            @click="toggleDropdown"
            class="flex items-center gap-2 hover:text-gray-600">
            <img
                src="@/images/DefaultProfilePicture.svg"
                alt="Profile Picture"
                class="w-10 h-10 rounded-full object-cover">
            PH-username
        </DefaultButton>
        <ProfileNav v-show="showProfileOpt"></ProfileNav>
        </div>
    </div>
</template>