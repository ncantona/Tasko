<script setup>
    import ProfileNav from '@/components/General/ProfileNav.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
    import { storeToRefs } from 'pinia';
    import { onMounted, ref } from 'vue';
    import { useUserStore } from '@/stores/useUserStore';

    let showProfileOpt = ref(false);
    
    const dropdownRef = ref(null);
    const { user } = storeToRefs(useUserStore());
    const toggleDropdown = () => showProfileOpt.value = !showProfileOpt.value;

    onMounted(() => {
        document.addEventListener('click', (event) => {
            if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
                showProfileOpt.value = false;
            }
        });
    });
</script>

<template>
    <div class="flex justify-between text-xl mt-4 text-black w-full">
        <RouterLink to="home" class="text-2xl">
                Tasko
        </RouterLink>
        <div class="relative" ref="dropdownRef">
            <DefaultButton
                @click="toggleDropdown"
                class="flex items-center gap-2 hover:text-blue-600 min-w-40 justify-center">
                <img
                    src="@/images/DefaultProfilePicture.svg"
                    alt="Profile Picture"
                    class="w-10 h-10 rounded-full object-cover"
                >
                {{ user.username }}
            </DefaultButton>
            <ProfileNav v-show="showProfileOpt" @clickButton="showProfileOpt = false"/>
        </div>
    </div>
</template>