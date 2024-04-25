<script>
export default {
    props: ["pages", "activeIndex"],
    methods: {
        activeClasses(index) {
            return {
                active: this.activeIndex == index,
                emphasize: this.activeIndex == index
            }
        }
    }
}
</script>

<template>
    <li class="nav-item" v-for="(page, index) in pages" :key="index" @click.prevent="$bus.$emit('changeActive', index)">
        <router-link class="nav-link" :to="`/${index}`"  :title="`this is a link to ${page.linkText}`"
            :class="activeClasses(index)">
            {{ page.pageTitle }}
        </router-link>
    </li>

</template>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>