<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="navbar" class="container-fluid p-4">
        <div class="row justify-content-center text-center px-3 pt-2">
            <RouterLink class="col-1 text-black text-decoration-none text-start nav-item" to="/"> LOGO </RouterLink>
            
            <div id="center-nav-items" class="col d-flex justify-content-between">
                <RouterLink class="text-black text-decoration-none nav-item flex-shrink-1" to="/all-posts"> Discover </RouterLink>
                <RouterLink class="text-black text-decoration-none nav-item flex-shrink-1" to="/"> Itineraries </RouterLink>
                <RouterLink class="text-black text-decoration-none nav-item flex-shrink-1" to="/post"> Add Trip </RouterLink>
                <RouterLink class="text-black text-decoration-none nav-item flex-shrink-1" to="/"> Recommend A Place </RouterLink>
            </div>
            
            <RouterLink class="col-1 text-white text-decoration-none text-end" to="/"> <button class="btn btn-primary nav-item"> Log In </button> </RouterLink>

        </div>
    </div>
</template>

<style scoped>
    #navbar {
        position: sticky;
        z-index: 1000;
        font-size: 1.5vw;
        top: 0;
    }
    
    #center-nav-items {
        padding: 0px 17vw;
    }

    .nav-item {
        cursor: pointer;
    }

    #center-nav-items .nav-item:hover {
        border-bottom: 2px solid black;
    }
    
    #log-in-button {
        border: 1px solid black;
    }
</style>