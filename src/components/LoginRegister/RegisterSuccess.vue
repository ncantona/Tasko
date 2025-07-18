<template>
    <div class="self-center w-5/6 max-w-100">
        <div class="flex flex-col bg-white/50 shadow-xl justify-center p-8 rounded-lg items-center gap-2">
            <img src="@/assets/images/Success.svg" alt="Success svg" class="w-20 h-20">
            <div class="flex text-xl flex-col text-center">
                <span class="text-xl">Your registration was successful!</span>
                <RouterLink to="login" class="text-blue-600 hover:text-blue-500">
                        Login
                </RouterLink>
            </div>
        </div>
    </div>
</template>