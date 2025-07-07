<script setup>
    import { useUserStore } from '@/stores/useUserStore';

    const user = useUserStore();
</script>

<template>
    <div class="absolute top-full right-0 mt-2 text-black rounded shadow-md p-5 z-50 w-full bg-white/95">
        <div class="flex flex-col text-xl gap-3">
            <RouterLink
                to="profile"
                @click="$emit('clickButton')"
                class="hover:text-blue-600 flex items-center gap-1">
                <img src="@/images/ProfileIcon.svg" alt="Profile Icon" class="w-8 h-6">
                <span>Profile</span>
            </RouterLink>
            <RouterLink
                to="account"
                @click="$emit('clickButton')"
                class="hover:text-blue-600 flex items-center gap-1">
                <img src="@/images/Options.svg" alt="Options Icon" class="w-8 h-6">
                <span>Account</span>
            </RouterLink>
            <RouterLink
                to="help"
                @click="$emit('clickButton')"
                class="hover:text-blue-600 flex items-center gap-1">
                <img src="@/images/HelpIcon.svg" alt="Help Icon" class="w-8 h-6">
                <span>Help</span>
            </RouterLink>
            <RouterLink
                to="login"
                @click="$emit('clickButton'); user.logout();"
                class="text-red-600 hover:text-red-400 self-center">
                <span>Logout</span>
            </RouterLink>
        </div>
    </div>
</template>