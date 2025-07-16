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
        },
        async addNewTask(taskData) {
            const { data } = await axios.post(`${URL}/api/task`, taskData);
            const targetTasklist = this.tasklists.find(tl => tl.id === data.tasklistId);
            if (targetTasklist)
                targetTasklist.tasks.push(data);
        },
        async deleteTask(tasklist, id) {
            await axios.delete(`${URL}/api/task/${id}`);
            tasklist.tasks = tasklist.tasks.filter(task => task.id !== id);
        },
        async deleteTasklist(id) {
            await axios.delete(`${URL}/api/tasklist/${id}`);
            this.tasklists = this.tasklists.filter(tasklist => tasklist.id !== id);
        },
        async updateTasklist(taskData, id) {
            const { data } = await axios.put(`${URL}/api/tasklist/${id}`, taskData);
            const targetTasklist = this.tasklists.find(tl => tl.id === id);
            if (targetTasklist)
            {
                targetTasklist.label = data.label;
                targetTasklist.description = data.description;
            }
        }
    }
})