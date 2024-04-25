<template>
    <navbar :pages="pages" :active-index="activeIndex"></navbar>
    <!-- <page-viewer v-if="pages.length > 0" :page="pages[activeIndex]"></page-viewer> -->
    <!-- <login :handle-submit="handleLogin"></login> -->
    <!-- <create-page @create-page="createPage"></create-page> -->
    <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PageViewer from "./components/PageViewer.vue"
import Login from "./components/Login.vue"
import CreatePage from "./components/CreatePage.vue"
export default {
    components: {
        PageViewer,
        Navbar,
        Login,
        CreatePage
    },
    created() {
        this.getPages()
        this.$bus.$on('changeActive', (indx) => {
            this.changeActive(indx)
        })
    },
    data() {
        return {
            activeIndex: 0,
            pages: []
        }
    },
    methods: {
        async getPages() {
            const res = await fetch("pages.json")
            const data = await res.json()
            this.pages = data.pages
        },
        handleLogin(email, pass) {
            console.log(email)
            console.log(pass)
        },
        createPage(obj) {
            this.pages.push(obj)
        },
        changeActive(index) {
            this.activeIndex = index
        }
    }
}
</script>