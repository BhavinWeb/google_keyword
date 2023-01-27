import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

// Import Styles => Tailwind Css
import './assets/css/style.css'

let app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.config.globalProperties.$isLoadingScreen = false
app.config.globalProperties.$baseURL = 'http://localhost:3000'

app.use(router)
    .use(vue3GoogleLogin, {
        clientId: '449219610142-5msb0dblb47vbhogu7k6fhld9cm1ui3m.apps.googleusercontent.com',
    })
    .use(pinia)
    .mount('#app')

// app.provide('isLoadingScreen', true)