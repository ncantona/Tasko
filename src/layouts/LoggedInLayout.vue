<script setup>
    import CustomFooter from '@/components/General/CustomFooter.vue';
    import NavBar from '@/components/General/NavBar.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen justify-center mx-auto md:min-w-160 md:max-w-300 w-5/6">
        <div class="flex flex-col min-h-screen">
            <NavBar class="mb-10" />
            <div class="flex-grow">
                <RouterView/>
            </div>
            <CustomFooter/>
        </div>
    </div>
</template>
