<script setup>
    import DefaultButton from './small/DefaultButton.vue';

</script>

<template>
    <div class="absolute top-full right-0 mt-2 text-black rounded shadow-md p-5 z-50 w-full bg-white/95">
        <div class="flex flex-col text-xl gap-2">
            <ul class="flex flex-col gap-2">
                <li>
                    <RouterLink to="profile">
                        <DefaultButton @click="$emit('clickButton')" class="hover:text-blue-600 flex items-center gap-1">
                            <img src="@/images/ProfileIcon.svg" alt="Profile Icon" class="w-8 h-6">
                            <span>Profile</span>
                        </DefaultButton>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="account">
                        <DefaultButton @click="$emit('clickButton')" class="hover:text-blue-600 flex items-center gap-1">
                            <img src="@/images/Options.svg" alt="Options Icon" class="w-8 h-6">
                            <span>Account</span>
                        </DefaultButton>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="help">
                        <DefaultButton @click="$emit('clickButton')" class="hover:text-blue-600 flex items-center gap-1">
                            <img src="@/images/HelpIcon.svg" alt="Help Icon" class="w-8 h-6">
                            <span>Help</span>
                        </DefaultButton>
                    </RouterLink>
                </li>
            </ul>
            <DefaultButton @click="$emit('clickButton')" class="text-red-500 hover:text-red-400">
                Logout
            </DefaultButton>
        </div>
    </div>
</template>