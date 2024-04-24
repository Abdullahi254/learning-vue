<script>
export default {
    props: ["page", "isActive"],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            }
        }
    }
}
</script>

<template>
    <a class="nav-link" :href="page.linkUrl" :title="`this is a link to ${page.linkText}`" :class="activeClasses">
        {{ page.pageTitle }}
    </a>
</template>

<style scoped>
.emphasize{
    text-decoration: underline !important;
}
</style>