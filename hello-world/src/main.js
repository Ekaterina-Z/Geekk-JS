import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import './assets/theme.css'

createApp(App)
    .use(createStore)
    .mount('#app')

