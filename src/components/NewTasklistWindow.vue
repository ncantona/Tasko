<script setup>
    import CustomInputText from '@/components/small/CustomInputText.vue';
    import CustomButtonSubmit from '@/components/small/CustomButtonSubmit.vue';
    import DefaultButton from '@/components/small/DefaultButton.vue';
</script>

<template>
    <div v-show="showNewTaskWindow" class="fixed inset-0 flex items-center justify-center bg-black/50">
        <form @submit.prevent="createNewTask" class="bg-white/90 shadow-xl rounded-xl p-4 flex flex-col gap-2 w-5/6">
            <CustomInputText v-model="label" type="text" label="Label*" name="label"></CustomInputText>
            <label for="description">Description</label>
            <textarea v-model="description" name="description" id="description" class="border-1 rounded-sm outline-none p-2 focus-within:border-2 focus-within:border-blue-500"></textarea>
            <div class="flex justify-around">
                <DefaultButton type="button" @click="$emit('close')" class="text-blue-600 hover:text-blue-500">cancel</DefaultButton>
                <CustomButtonSubmit>Create New Task</CustomButtonSubmit>
            </div>
        </form>
    </div>
</template>