<template>
    <nav :class="['navbar', 'navbar-expand-lg', `navbar-${theme}`, `bg-${theme}`, 'px-2']">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="(link, index) in pages" :key="link.text">
                    <navbar-link :link="link" :isActive="activeIndex == index" @click.prevent="changeActive(index)">
                    </navbar-link>
                </li>
            </ul>
        </div>

        <button @click.prevent="changeTheme()" class="btn btn-primary">Toogle</button>
    </nav>

</template>

<script>
import NavbarLink from "./NavbarLink.vue"

export default {
    components: {
        NavbarLink
    },
    created() {
        this.getThemeSettings()
    },
    data() {
        return {
            theme: "dark",
        }
    },
    methods: {
        changeTheme() {
            let theme = "light"
            if (this.theme === "light") {
                theme = "dark"
            }
            this.theme = theme
            this.setThemeSettings()
        },
        setThemeSettings() {
            localStorage.setItem("theme", this.theme)
        },
        getThemeSettings() {
            let theme = localStorage.getItem("theme")
            if (theme) {
                this.theme = theme
            } else {
                this.theme = "light"
            }
        }
    },
    props: ['pages', 'activeIndex', 'changeActive'],
    computed: {
        activateLink() {
            return (index) => this.activeIndex === index ? true : false
        }
    }

}

</script>