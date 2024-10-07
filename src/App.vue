<!-- <script setup>
import { onMounted } from 'vue';

function beginParallex(){
    let bgImg = document.getElementById('background-img')
    
    let scrollValue = window.scrollY

    // bgImg.style.scale = 1 + (scrollValue / 1000)
    // if (bgImg.style.scale <= 2){

    // }
    console.log(bgImg.style.scale)
}

onMounted(() => {
    window.addEventListener('scroll', beginParallex)
})

</script>

<template>
    <div id="main-section">
        <div id="background-img">
            <img class="foreground" src="./images/file.png">
            <img class="foreground" src="./images/mountain.png">
        </div>
    </div>

    <div id="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
            commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
            commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
            commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
            commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
    </div>


</template> -->


<script setup>
import { onMounted, onUnmounted } from 'vue';

function beginParallax() {
    let bgImg = document.getElementById('background-img');
    let foregrounds = document.querySelectorAll('.foreground');

    let scrollValue = window.scrollY;

    // Parallax effect for background image
    bgImg.style.transform = `translateY(${scrollValue * 0.5}px)`; // Slower scrolling for background

    // Parallax effect for each foreground image
    foregrounds.forEach((foreground, index) => {
        // Each foreground layer scrolls at a slightly different speed for depth
        foreground.style.transform = `translateY(${scrollValue * (0.3 - (index * 0.1))}px)`;
    });
}

onMounted(() => {
    window.addEventListener('scroll', beginParallax);
});

onUnmounted(() => {
    window.removeEventListener('scroll', beginParallax); // Clean up event listener
});
</script>

<template>
    <div id="main-section">
        <div id="background-img">
            <!-- Foreground images for parallax effect -->
            <img class="foreground" src="./images/file.png">
            <img class="foreground" src="./images/mountain.png">
        </div>
    </div>

    <div id="paragraph">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
        commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
        commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
        commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
    </div>
</template>
