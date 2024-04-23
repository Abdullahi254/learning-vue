<template>
    <navbar :pages="pages" :active-index="activeIndex" :change-active="(index) => activeIndex = index"></navbar>
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activeIndex]"></page-viewer> -->
    <login :handle-submit="handleSubmit"></login>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PageViewer from "./components/PageViewer.vue"
import Login from "./components/Login.vue"
export default {
    components: {
        PageViewer,
        Navbar,
        Login
    },
    created(){
        this.getPages()
    },
    data() {
        return {
            activeIndex: 0,
            pages: []
        }
    },
    methods: {
        async getPages(){
            const res = await fetch("pages.json")
            const data = await res.json()
            this.pages = data.pages
        },
        handleSubmit(email, pass){
            console.log(email)
            console.log(pass)
        }
    }
}
</script>