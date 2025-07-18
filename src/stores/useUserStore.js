import { URL } from "@/API/Url.vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        isInitialized: false,
        user: null,
    }),
    getters: {
        isLoggedIn() {
            return (this.isInitialized);
        },
    },
    actions: {
        async initialize() {
            if (!this.isInitialized)
                this.isInitialized = this.loadUser().catch(() => undefined);
            await this.isInitialized;
            this.isInitialized = true;
        },
        async register(userData) {
            await axios.post(`${URL}/auth/register`, userData)
        },
        async loadUser() {
            if (!localStorage.getItem('jwt'))
                return;
            const { data } = await axios.get(`${URL}/auth`);
            this.applyAuthentication(data);
        },
        async login(body) {
            const { data } = await axios.post(`${URL}/auth/login`, body);
            this.applyAuthentication(data);
        },
        logout() {
            this.user = null;
            localStorage.removeItem('jwt');
        },
        applyAuthentication({user, token}) {
            this.user = user;
            localStorage.setItem('jwt', `Bearer ${token}`);
        },
        async updateUser(body) {
            const { data } = await axios.put(`${URL}/user`, body);
            this.user = data;
        },
        async changeUserPassword(newPassword) {
            await axios.post(`${URL}/user/password`, {password: newPassword});
        },
        async deleteAccount() {
            await axios.delete(`${URL}/user`);
            localStorage.removeItem('jwt');
        }
    }
})