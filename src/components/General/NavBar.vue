<script setup>
    import DefaultButton from '@/components/SmallComponents/DefaultButton.vue';
    import ProfileNav from '@/components/General/ProfileNav.vue';
    import { useUserStore } from '@/stores/useUserStore';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { storeToRefs } from 'pinia';

    const { user } = storeToRefs(useUserStore());

    let showProfileOpt = ref(false);
    const toggleDropdown = () => showProfileOpt.value = !showProfileOpt.value;

    const dropdownRef = ref(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
            showProfileOpt.value = false;
        }
    };

    onMounted(() => document.addEventListener('click', handleClickOutside));
    onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <div class="flex justify-between text-xl mt-4 text-black w-full">
        <RouterLink 
            to="home"
            class="text-2xl">
            Tasko
        </RouterLink>
        <div class="relative" ref="dropdownRef">
            <DefaultButton
                @click="toggleDropdown"
                class="flex items-center gap-2 hover:text-blue-600 min-w-40 justify-center">
                <img
                    src="@/assets/images/DefaultProfilePicture.svg"
                    alt="Profile Picture"
                    class="w-10 h-10 rounded-full object-cover"
                >
                {{ user.username }}
            </DefaultButton>
            <ProfileNav
                v-show="showProfileOpt"
                @clickButton="toggleDropdown"/>
        </div>
    </div>
</template>