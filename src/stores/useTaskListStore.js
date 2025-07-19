import { useUserStore } from '@/stores/useUserStore';
import { URL } from "@/API/Url.vue";
import { defineStore } from "pinia";
import axios from "axios";

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
                    const { data } = await axios.get(`${URL}/tasklist/${tasklist.id}`);
                    this.tasklists.push(data);
                } catch (error) {
                    throw Error('Could not load tasklists from user');
                }
            }
            for (const tasklist of userStore.user.sharedTasklists) {
                if (this.tasklists.some(t => t.id === tasklist.tasklistId))
                    continue;
                try {
                    const { data } = await axios.get(`${URL}/tasklist/${tasklist.tasklistId}`);
                    this.tasklists.push(data);
                } catch (error) {
                    throw Error('Could not load shared tasklists from user');
                }
            }
        },
        async createNewTask(body) {
            const { data } = await axios.post(`${URL}/tasklist`, body);
            this.tasklists.push(data);
        },
        async addNewTask(taskData) {
            const { data } = await axios.post(`${URL}/task`, taskData);
            const targetTasklist = this.tasklists.find(tl => tl.id === data.tasklistId);
            if (targetTasklist)
                targetTasklist.tasks.push(data);
        },
        async deleteTask(tasklist, id) {
            await axios.delete(`${URL}/task/${id}`);
            tasklist.tasks = tasklist.tasks.filter(task => task.id !== id);
        },
        async deleteTasklist(id) {
            await axios.delete(`${URL}/tasklist/${id}`);
            this.tasklists = this.tasklists.filter(tasklist => tasklist.id !== id);
        },
        async updateTasklist(taskData, id) {
            const { data } = await axios.put(`${URL}/tasklist/${id}`, taskData);
            const targetTasklist = this.tasklists.find(tl => tl.id === id);
            if (targetTasklist)
            {
                targetTasklist.label = data.label;
                targetTasklist.description = data.description;
            }
        },
        async updateTaskState(task, newState) {
            const taskData = {
                title: task.title,
                status: newState,
            }
            await axios.put(`${URL}/task/${task.id}`, taskData);
            task.status = newState;
        },
        sortTasksByStatus(tasklistId) {
            const statusOrder = {
                'TODO': 0,
                'IN_PROGRESS': 1,
                'DONE': 2,
            };
            const tasklist = this.tasklists.find(tl => tl.id === tasklistId);
            if (tasklist && Array.isArray(tasklist.tasks)) {
                tasklist.tasks.sort((a, b) => {
                    return statusOrder[a.status] - statusOrder[b.status];
                });
            }
        },
        async updateTask(taskData, task) {
            await axios.put(`${URL}/task/${task.id}`, taskData);
            task.title = taskData.title;
            task.description = taskData.description;
        },
        async addUserToTasklist(tasklistId, userId) {
            const { data } = await axios.post(`${URL}/tasklist/${tasklistId}/user/${userId}`);
            const targetTasklist = this.tasklists.find(tl => tl.id === tasklistId);
            targetTasklist.sharedTasklists = data.sharedWith.map(({ user, ...rest }) => rest);
            console.log(data);
        },
        async removeUserFromTasklist(tasklistId, userId) {
            await axios.delete(`${URL}/tasklist/${tasklistId}/user/${userId}`);
            const targetTasklist = this.tasklists.find(tl => tl.id === tasklistId);
            if (targetTasklist)
                targetTasklist.sharedTasklists = targetTasklist.sharedTasklists.filter(tl => tl.userId != userId);
        },
        async removeSelfFromTasklist(tasklistId, userId) {
            await axios.delete(`${URL}/tasklist/${tasklistId}/user/${userId}`);
            this.tasklists = this.tasklists.filter(tl => tl.id != tasklistId);
        }
    }
})