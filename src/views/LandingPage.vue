<script setup>
import { onMounted } from 'vue'

// FOR GSAP SCROLL TRIGGER
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    let timeline1 = gsap.timeline({
        defaults: {
            duration: 10,
        },
        scrollTrigger: {
            scrub: 1.5,
            pin: '#background',
            anticipatePin: true,
            end: "+=" + (window.innerHeight * 5),
        }
    })
    
    timeline1
        .to('#sun', {yPercent: -20, xPercent: 7, scale: 0.8})
        .to('#cloud-3', {yPercent: -21, xPercent: 9, scale: 0.7}, 0)
        .to('#bird-3', {yPercent: -30, xPercent: 20, scale: 0.5}, 0)
        .to('#bird-1', {yPercent: -30, xPercent: 15, scale: 0.5}, 0)
        .to('#bird-2', {yPercent: -20, xPercent: -15, scale: 0.7}, 0)
        .to('#cloud-2', {yPercent: -1, xPercent: 13, scale: 1.3}, 0)
        .to('#cloud-1', {yPercent: -15, xPercent: -8, scale: 0.85}, 0)
        .to('#app-name', {yPercent: -90, scale: 0.9}, 0)
        .to('#cloud-4', {xPercent: 15, opacity: 0.85})
        .to('#trees', {yPercent: -5}, '<0')
        .to('#man', {yPercent: -5, xPercent: 5, scale: 1.1}, '<0')
        .to('#blue-mountain', {yPercent: -5}, '<0')
        .to('#app-name', {yPercent: -80})
        .to('#slogan', {yPercent: -150, opacity: 1}, '<0')
        .to('#red-mountain', {yPercent: -10, xPercent: -10, scale: 1.2})
        .to('#right-bush', {yPercent: -15, xPercent: -10, scale: 1.3}, '<0')
        .to('#plants', {yPercent: -10, xPercent: 5, scale: 1.2}, '<0')
        .to('#start-your-journey', {yPercent: -120, opacity: 1})
        .to('#app-name', {yPercent: -130, opacity: 0})
        .to('#slogan', {yPercent: -300, opacity: 0}, '<0')
        .to('#start-your-journey', {yPercent: -270, opacity: 0}, '<0')
        .to('#images', {opacity: 0.2})
        .to('#feature-1', {yPercent: -20, opacity: 1}, '<0')
        .to('#feature-1', {yPercent: -50, opacity: 0})
        .to('#feature-2', {yPercent: -20, opacity: 1})
        .to('#feature-2', {yPercent: -50, opacity: 0})
        .to('#feature-3', {yPercent: -20, opacity: 1})
        .to('#feature-3', {yPercent: -50, opacity: 0})
        .to('#images', {opacity: 1})

})
</script>

<template>
    <div id="background">
        <div id="images" class="container-fluid p-0">
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
            <h1 id="app-name" class="text text-center w-100"> VOYAGER </h1>
            <h3 id="slogan" class="text text-center w-100"> to roam the roads of lands remote </h3>
            <div id="button-div" class="text w-100">
                <button id="start-your-journey" class="btn btn-dark m-auto d-block"> Start your journey now. </button>
            </div>
        </div>
        <div id="feature-1" class="feature-container text-center justify-content-between w-100 d-flex">
            <div class="feature-info">
                <h2 class="heading"> Feature 1 </h2>
                <p class="description"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et.
                </p>
            </div>
            <div class="feature-image">
                Place holder image
            </div>
        </div>
        <div id="feature-2" class="feature-container text-center justify-content-between w-100 d-flex">
            <div class="feature-info">
                <h2 class="heading"> Feature 2 </h2>
                <p class="description"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et.
                </p>
            </div>
            <div class="feature-image">
                Place holder image
            </div>
        </div>
        <div id="feature-3" class="feature-container text-center justify-content-between w-100 d-flex">
            <div class="feature-info">
                <h2 class="heading"> Feature 3 </h2>
                <p class="description"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi deserunt quasi ullam dolores ducimus? Provident architecto eos, excepturi et.
                </p>
            </div>
            <div class="feature-image">
                Place holder image
            </div>
        </div>
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
        min-height: 57vw;
        height: 100vh;
        position: relative;
        top: -96px;
        overflow: hidden;
    }
    
    .image {
        position: absolute;
        bottom: 0;
    }
    
    #app-name {
        position: absolute;
        font-size: 8vw;
        bottom: 24vw;
        font-weight: 800;
    }

    #slogan {
        position: absolute;
        font-size: 2.05vw;
        bottom: 26vw;
        opacity: 0;
    }

    #button-div {
        position: absolute;
        bottom: 23vw;
    }

    #button-div button {
        font-size: 1.2vw;
        opacity: 0;
    }

    .feature-container {
        position: absolute;
        bottom: 10vw;
        padding: 0px 10vw;
        min-height: 30vw;
    }

    .feature-container .feature-info {
        padding: 0px 5vw 0px 0px;
        width: 45vw;
        align-content: center;
    }

    .feature-info .heading {
        font-size: 4vw;
        font-weight: 600;
    }
    
    .feature-info .description {
        font-size: 2vw;
    }

    .feature-container .feature-image {
        background-color: black; 
        width: 40vw; color: white;
        align-content: center;
        opacity: 0.8;
    }

    #feature-1, #feature-2, #feature-3 {
        opacity: 0;
    }

</style>