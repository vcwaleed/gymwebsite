import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "./components/HomePage.vue"
import BmiComponent from './views/BmiComponent.vue'

const routes=[
    {
        name: "HomePage",
        path: '/',
        component:HomePage
    },
    {
        name:"BmiComponent",
        path:'/bmi',
        component:BmiComponent
    }

]





const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;