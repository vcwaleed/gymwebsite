import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "./components/HomePage.vue"
import BmiComponent from './views/BmiComponent.vue'
import RegistrationFrom from './views/RegistrationFrom.vue'
import SignupPage from './views/SignupPage.vue'
import LoginPage from './views/LoginPage.vue'
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
    },
    {
        name:"SignupPage",
        path:"/signup",
        component:SignupPage
    },
    {
        name:"LoginPage",
        path:"/login",
        component:LoginPage
    }


]





const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;