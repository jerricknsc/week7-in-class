<script setup>
import { onMounted } from 'vue';

function beginParallex(){

    let text = document.getElementById('text')
    let btn = document.getElementById('letsGo')
    let birds = document.getElementById('birds')

    let scrollValue = window.scrollY

    text.style.top = 40 + (scrollValue * -0.5) + '%'
    btn.style.top = 60 + (scrollValue * -0.2) + '%'
    birds.style.right = (scrollValue * -0.2) + '%'
}

onMounted(() => {
    window.addEventListener('scroll', beginParallex)
})

</script>

<template>
    <div id="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit error accusantium optio dignissimos. Tenetur, architecto
            commodi ipsa asperiores voluptatum sequi aliquid quam incidunt accusamus impedit in! Ut magnam deserunt dignissimos?
    </div>
    <section id="section">
        <h1 id="text"> This is jerrick's app </h1>
        <button id="letsGo"> Let's Go! </button>
        <img id="birds" src="./images/birds.png">
        <img id="snow-mountains" src="./images/snow-mountains.webp">
    </section>

    <body>
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
    </body>
</template>

<style scoped>
#section {
    position: relative;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

#text {
    position: absolute;
    z-index: 10;
    font-size: 50px;
    top: 40%;
}

#letsGo {
    position: absolute;
    z-index: 10;
    top: 60%;
    padding: 15px;
    background-color: antiquewhite;
    border-radius: 10px;
    min-width: 10rem;
}

#birds {
    position: absolute;
    z-index: 10;
    scale: 0.4;
    top: -40%;
    right: 0;
}

#snow-mountains {
    width: 100vw;
    max-height: 80vh;
    opacity: 0.7;
}

#paragraph {
    font-size: 2rem;
}

</style>
