import { createWebHistory, createRouter } from 'vue-router'
import HomePage from "./components/HomePage.vue"
import BmiComponent from './views/BmiComponent.vue'
import RegistrationFrom from './views/RegistrationFrom.vue'
import SignupPage from './views/SignupPage.vue'
import LoginPage from './views/LoginPage.vue'
import BmiList from './views/BmiList.vue'
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
    },
    {
        name:"BmiList",
        path:"/bmilist",
        component:BmiList,
    }


]





const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;