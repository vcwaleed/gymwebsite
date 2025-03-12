<script setup>
import { onMounted } from "vue"
import { useRouter } from 'vue-router';
import HomePage from "./NavbarPage.vue"
import BannderPage from "./BannderPage.vue"
import FooterPage from "./FooterPage.vue"
import OurProcess from "./OurProcess.vue"
const router = useRouter();
onMounted(()=>{
    const userInfo = localStorage.getItem('user-info')
        if (!userInfo) {
            router.push('/signup');
        }
})
</script>
<template>

<HomePage/>
<BannderPage/>
<OurProcess/>
<FooterPage/>
</template>
<style lang="scss" scoped>
</style>
