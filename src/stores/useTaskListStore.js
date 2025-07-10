import { URL } from "@/API/Url.vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from '@/stores/useUserStore';

export const useTaskListStore = defineStore('tasklists', {
    state: () => ({
        tasklists: [],
    }),
    actions: {
        async initialize() {
            const userStore = useUserStore();
            if (!userStore.isInitialized)
                return;
            for (const tasklist of userStore.user.tasklists) {
                try {
                    const { data } = await axios.get(`${URL}/api/tasklist/${tasklist.id}`);
                    this.tasklists.push(data);
                } catch (error) {
                    throw ('Could not load tasklists from user');
                }
            }
        },
        async createNewTask(body) {
            const { data } = await axios.post(`${URL}/api/tasklist`, body);
            this.tasklists.push(data);
        }
    }
})