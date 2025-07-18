<script setup>
    import CustomSubmitButton from '@/components/SmallComponents/CustomSubmitButton.vue';
    import CancelButton from '../SmallComponents/CancelButton.vue';
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50">
        <div class="bg-white p-8 rounded-xl shadow-md text-center w-5/6 max-w-150 flex flex-col gap-5">
            <span class="text-xl">Are you sure you want to <b>permanently delete</b> this tasklist?</span>
            <div class="flex justify-center gap-5">
                <CancelButton
                    type="button"
                    @click="$emit('close')"
                    class="bg-white py-3 text-blue-600 font-semibold shadow-lg transition-all duration-200 ease-in-out rounded-xl px-4 hover:bg-gray-100">
                </CancelButton>
                <CustomSubmitButton
                    @click="$emit('delete')"
                    class="bg-red-600 hover:bg-red-500">
                    Yes, Delete this tasklist
                </CustomSubmitButton>
            </div>
        </div>
    </div>
</template>