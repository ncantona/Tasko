import { defineStore } from "pinia";

export const usePopupStore = defineStore('popups', {
    state: () => ({
        success: '',
        error: '',
    }),
    actions: {
        clearSuccess() {
            this.success = '';
        },
        clearError() {
            this.error = '';
        },
    },
});