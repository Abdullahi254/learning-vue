<template>
    <navbar :pages="pages" ></navbar>
    <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
    components: {
        Navbar,
    },
    created() {
        this.getPages()
        this.$bus.$on('changeActive', (indx) => {
            this.changeActive(indx)
        })
    },
    data() {
        return {
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