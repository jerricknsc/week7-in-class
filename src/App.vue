<script setup>
import { onMounted } from 'vue'

function startParallex(){
    let scrollValue = window.scrollY
    // window.scrollY /= 2
    
    let layer1 = document.getElementById('layer1')
    layer1.style.width = (100 + scrollValue / 5) + '%'
    
    let layer2 = document.getElementById('layer2')
    layer2.style.width = (100 + scrollValue / 5) + '%'
    layer2.style.left = (scrollValue / 50) + '%'
    
    let text = document.getElementById('text')
    text.style.top = - scrollValue / 5 + '%'

    console.log(window.scrollY)
    

}

onMounted(() => {
    window.addEventListener('scroll', startParallex)
})
</script>


<template>
        <section class="zoom">
            <img id="layer1" src="./images/mountain1.png">
            <img id="layer2" src="./images/mountain2.png">
            <img id="text" src="./images/text.png">
        </section>
        <section class="content">
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
        </section>
</template>