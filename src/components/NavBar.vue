<script setup>
    import ProfileNav from './ProfileNav.vue';
    import DefaultButton from './small/DefaultButton.vue';
    import { storeToRefs } from 'pinia';
    import { onMounted, ref } from 'vue';
    import { useUserStore } from '@/stores/useUserStore';

    let showProfileOpt = ref(false);
    
    const dropdownRef = ref(null);
    const { user } = storeToRefs(useUserStore());

    onMounted(() => {
        document.addEventListener('click', (event) => {
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                showProfileOpt.value = false;
            }
        });
    });

    const toggleDropdown = () => showProfileOpt.value = !showProfileOpt.value;
</script>

<template>
    <div class="flex justify-between text-xl mt-4 text-black w-full">
        <RouterLink to="home">
            <DefaultButton
                @click="changeRoute"
                class="text-2xl">
                Tasko
            </DefaultButton>
        </RouterLink>
        <div class="relative" ref="dropdownRef">
            <DefaultButton
                @click="toggleDropdown"
                class="flex items-center gap-2 hover:text-blue-600 min-w-40 justify-end">
                <img
                    src="@/images/DefaultProfilePicture.svg"
                    alt="Profile Picture"
                    class="w-10 h-10 rounded-full object-cover">
                {{ user.username }}
            </DefaultButton>
            <ProfileNav v-show="showProfileOpt" @clickButton="showProfileOpt = false"/>
        </div>
    </div>
</template>