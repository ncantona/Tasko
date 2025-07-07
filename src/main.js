import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

axios.interceptors.request.use(request => {
    const jwt = localStorage.getItem('jwt')
    if(!request.headers.hasAuthorization() && jwt) {
        request.headers.setAuthorization(jwt)
    }
    return (request);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
