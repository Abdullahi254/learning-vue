<template>
    <nav :class="['navbar', 'navbar-expand-lg', `navbar-${theme}`, `bg-${theme}`, 'px-2']">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <navbar-link :pages="publishedPages" :activeIndex="activeIndex">
                </navbar-link>
                <li class="nav-item" @click.prevent="$bus.$emit('changeActive', index)">
                    <router-link class="nav-link" to="/create" :class="activateCreateLink()">
                        Create
                    </router-link>
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
        },
        activateCreateLink() {
            return {
                active: this.$route.path == "/create",
                emphasize: this.$route.path == "/create",
            }
        }
    },
    props: ['pages', 'activeIndex',],
    computed: {
        publishedPages() {
            return this.pages.filter(page => page.published)
        }
    }

}

</script>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>