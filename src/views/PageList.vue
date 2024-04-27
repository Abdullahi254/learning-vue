<template>
    <p>List of pages will be here</p>
    <p>Count: {{ count }}</p>
    <button @click.prevent="click">Increase(+)</button>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0)

    const click = ()=>{
        count.value++;
    }

</script>