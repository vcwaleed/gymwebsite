import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "./components/HomePage.vue"
import BmiComponent from './views/BmiComponent.vue'
import RegistrationFrom from './views/RegistrationFrom.vue'

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
    },
    {
        name:"RegistrationFrom",
        path:"/registrationfrom",
        component:RegistrationFrom
    }

]





const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;