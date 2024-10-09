<script setup>
import { onMounted } from 'vue'

// FOR GSAP SCROLL TRIGGER
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    let timeline1 = gsap.timeline({
        defaults: {
            duration: 3,
        },
        scrollTrigger: {
            scrub: 1.5,
            pin: '#background'
        }
    })
    
    timeline1
        .to('#app-name', {yPercent: -150, scale: 0.85})
        .to('#sun', {yPercent: -20, xPercent: 7, scale: 0.8}, 0)
        .to('#cloud-3', {yPercent: -21, xPercent: 9, scale: 0.7}, 0)
        .to('#bird-3', {yPercent: -30, xPercent: 20, scale: 0.5}, 0)
        .to('#bird-1', {yPercent: -30, xPercent: 15, scale: 0.5}, 0)
        .to('#bird-2', {yPercent: -20, xPercent: -15, scale: 0.7}, 0)
        .to('#cloud-2', {yPercent: -1, xPercent: 13, scale: 1.3}, 0)
        .to('#cloud-1', {yPercent: -15, xPercent: -8, scale: 0.85}, 0)
        .to('#cloud-4', {xPercent: 15, opacity: 0.85})
        .to('#app-name', {yPercent: -160}, '<0')
        .to('#slogan', {yPercent: -100, opacity: 1}, '<0')

})
</script>

<template>
    <div id="background" class="container-fluid p-0">
        <img id="trees" class="image w-100 trees" src="../images/trees.png">
        <img id="blue-mountain" class="image w-100" src="../images/blue-mountain.png">
        <img id="right-bush" class="image w-100" src="../images/right-bush.png">
        <img id="man" class="image w-100" src="../images/man.png">
        <img id="sun" class="image w-100" src="../images/sun.png">
        <img id="cloud-1" class="image w-100" src="../images/cloud-1.png">
        <img id="cloud-2" class="image w-100" src="../images/cloud-2.png">
        <img id="cloud-3" class="image w-100" src="../images/cloud-3.png">
        <img id="cloud-4" class="image w-100" src="../images/cloud-4.png">
        <img id="bird-1" class="image w-100" src="../images/bird-1.png">
        <img id="bird-2" class="image w-100" src="../images/bird-2.png">
        <img id="bird-3" class="image w-100" src="../images/bird-3.png">
        <img id="plants" class="image w-100" src="../images/plants.png">
        <img id="red-mountain" class="image w-100" src="../images/red-mountain.png">
        <h1 id="app-name" class="text-center w-100"> Voyager </h1>
        <h3 id="slogan" class="text-center w-100"> to roam the roads of lands remote </h3>
    </div>
    <!-- <div class="content">
        <h2> Sample parallex </h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et,
            labore maxime vitae officia iusto sint praesentium doloribus doloremque corrupti distinctio?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et,
            labore maxime vitae officia iusto sint praesentium doloribus doloremque corrupti distinctio?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et,
            labore maxime vitae officia iusto sint praesentium doloribus doloremque corrupti distinctio?
        </p>
    </div> -->
</template>

<style>
    template {
        margin: 0;
        padding: 0;
    }

    #background {
        width: 100%;
        height: 100vh;
        position: relative;
        top: -96px;
        overflow: hidden;
    }
    
    .image {
        /* width: 100%; */
        position: absolute;
        bottom: 0;
    }

    #app-name {
        position: absolute;
        font-size: 8vw;
        bottom: 20vw;
    }

    #slogan {
        position: absolute;
        font-size: 3vw;
        bottom: 27vw;
        opacity: 0;
    }

    #background #man {
        
    }

    #plants {
        /* scale: 0.9; */
        /* bottom: 0; */
    }
</style>