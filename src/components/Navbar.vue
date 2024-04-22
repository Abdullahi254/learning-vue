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
                    <a class="nav-link" :href="link.link" :title="`this is a link to ${link.text}`"
                        @click.prevent="changeActive(index)" :class="{ active: activeIndex == index }">
                        {{ link.text }}
                    </a>
                </li>
            </ul>
        </div>

        <button @click.prevent="changeTheme()" class="btn btn-primary">Toogle</button>
    </nav>

</template>

<script>

export default {
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
            return this.theme = theme
        }
    },
    props: ['pages', 'activeIndex', 'changeActive'],

}

</script>