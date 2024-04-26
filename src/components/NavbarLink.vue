<script>
export default {
    props: ["pages"],
}
</script>

<template>
    <li class="nav-item" v-for="(page, index) in pages" :key="index" @click.prevent="$bus.$emit('changeActive', index)">
        <router-link class="nav-link" :to="`/${index}`"  :title="`this is a link to ${page.linkText}`" active-class="active emphasize">
            {{ page.pageTitle }}
        </router-link>
    </li>

</template>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>