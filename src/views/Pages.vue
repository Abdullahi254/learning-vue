<template>
    <div class="container">
        <div class="d-flex flex-row align-items-start">
            <router-link to="/pages" active-class="emphasize" class="child text-decoration-none custom-link-color">list</router-link>
            <router-link to="/pages/create" active-class="emphasize" class="child text-decoration-none custom-link-color">Create</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.child {
    margin-right: 10px;
}

.custom-link-color{
    color: #000000;
    /* Change the color to your desired color */
}
.emphasize{
    text-decoration: underline !important;
}
</style>