<template>
    <div class="container">
        <h1>{{ page.text }}</h1>
        <p>{{ page.message }}</p>
    </div>
</template>

<script>
export default {
    props: ['page'],
}

</script>