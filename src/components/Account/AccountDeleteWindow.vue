<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CancelButton from '@/components/SmallComponents/CancelButton.vue';
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50">
        <div class="bg-white p-8 rounded-xl shadow-md text-center w-5/6 max-w-150 flex flex-col gap-5">
            <span class="text-xl">Are you sure you want to <b>permanently delete</b> your account?</span>
            <div class="flex justify-center gap-5">
                <CancelButton @click="$emit('cancel')"/>
                <CustomSubmitButton
                    @click="$emit('delete')"
                    class="bg-red-600 text-white font-semibold shadow-md transition-all duration-200 ease-in-out rounded-xl px-4 py-3 hover:bg-red-700 hover:shadow-lg active:scale-95 flex items-center gap-2">
                    Yes, Delete my account
                </CustomSubmitButton>
            </div>
        </div>
    </div>
</template>