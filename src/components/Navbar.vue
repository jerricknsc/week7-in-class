<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="navbar" class="container-fluid p-4">
        <div class="row justify-content-center text-center">
            <RouterLink class="col text-black text-decoration-none" to="/"> Landing Page </RouterLink>
            <RouterLink class="col text-black text-decoration-none" to="/post"> Create Post </RouterLink>
            <RouterLink class="col text-black text-decoration-none" to="/all-posts"> View all posts </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    #navbar {
        position: sticky;
        z-index: 1000;
        font-size: 2rem;
        top: 0;
    }
</style>