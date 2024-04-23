<template>
    <navbar :pages="pages" :active-index="activeIndex" :change-active="(index) => activeIndex = index"></navbar>
    <page-viewer v-if="pages.length > 0" :page="pages[activeIndex]"></page-viewer>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PageViewer from "./components/PageViewer.vue"
export default {
    components: {
        PageViewer,
        Navbar
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
        }
    }
}
</script>