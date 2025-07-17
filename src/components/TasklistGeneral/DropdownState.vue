<script setup>
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
    import { useTaskListStore } from '@/stores/useTaskListStore';

    const props = defineProps({
        task: Object,
    });

    const options = ['Open', 'In Progress', 'Done'];
    const isOpen = ref(false);
    const dropdownRef = ref(null);

    const statusMap = {
        'Open': 'TODO',
        'In Progress': 'IN_PROGRESS',
        'Done': 'DONE',
    };

    const reverseStatusMap = {
    'TODO': 'Open',
    'IN_PROGRESS': 'In Progress',
    'DONE': 'Done',
    };

    const selected = computed(() => reverseStatusMap[props.task.status]);
    const toggleDropdown = () => isOpen.value = !isOpen.value;
    const tasklistStore = useTaskListStore();
    const selectOption = async (option) => {
        try {
            await tasklistStore.updateTaskState(props.task, statusMap[option]);
        } catch (error) {
            console.error(error);
        }
        isOpen.value = false;
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
            isOpen.value = false;
        }
    };

    onMounted(() => document.addEventListener('click', handleClickOutside));
    onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside));

    const buttonClasses = computed(() => {
        switch (selected.value) {
            case 'Open':
            return 'bg-green-100 border-green-400 text-green-700 hover:bg-green-200';
            case 'In Progress':
            return 'bg-orange-100 border-orange-400 text-orange-700 hover:bg-orange-200';
            case 'Done':
            return 'bg-gray-100 border-gray-400 text-gray-700 hover:bg-gray-200';
            default:
            return 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100';
        }
    });
</script>

<template>
  <div ref="dropdownRef" class="relative inline-block w-48">
    <button @click="toggleDropdown" :class="buttonClasses" class="w-full font-medium py-2 px-4 rounded-md shadow-sm flex items-center justify-between"
    >
      {{ selected }}
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-1"
    >
      <ul>
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>
