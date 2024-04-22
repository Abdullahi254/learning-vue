<template>
    <navbar :pages="pages" :active-index="activeIndex" :change-active="(index)=>activeIndex = index"></navbar>
    <page-viewer :page="pages[activeIndex]"></page-viewer>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import PageViewer from "./components/PageViewer.vue"
export default {
    components:{
        PageViewer,
        Navbar
    },
    data() {
            return {
                activeIndex: 0,
                pages: [
                    {
                        text: "Home",
                        link: "index.html",
                        message: "This is my home page"
                    },
                    {
                        text: "About",
                        link: "about.html",
                        message: "This is my about page"
                    },
                    {
                        text: "Contact",
                        link: "contact.html",
                        message: "This is my messages page"
                    },
                ]
            }
        }
}
</script>