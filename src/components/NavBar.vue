<script setup>
    import ProfileNav from './ProfileNav.vue';
    import DefaultButton from './small/DefaultButton.vue';
    import { onMounted, ref } from 'vue';

    let showProfileOpt = ref(false);
    
    const dropdownRef = ref(null);
    
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
                class="flex items-center gap-2 hover:text-blue-600">
                <img
                    src="@/images/DefaultProfilePicture.svg"
                    alt="Profile Picture"
                    class="w-10 h-10 rounded-full object-cover">
                PH-username
            </DefaultButton>
            <ProfileNav v-show="showProfileOpt" @clickButton="showProfileOpt = false"/>
        </div>
    </div>
</template>