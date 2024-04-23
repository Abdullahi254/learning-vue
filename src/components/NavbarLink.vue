<script>
export default {
    props: ["link", "isActive"],
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
    <a class="nav-link" :href="link.link" :title="`this is a link to ${link.text}`" :class="activeClasses">
        {{ link.text }}
    </a>
</template>

<style scoped>
.emphasize{
    text-decoration: underline !important;
}
</style>