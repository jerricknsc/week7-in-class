<script setup>
import { onMounted, ref } from 'vue';
import { getAllPost } from '@/services/PostService';

var posts = ref({})

onMounted(async () => {
    posts.value = await getAllPost()
    console.log(posts.value)
})
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="post in posts" class="col-3 mb-3">
                <div class="card">
                    <img :src="post.imageURL" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title"> {{ post.location }} </h5>
                        <h6 class="card-text"> Rating: {{ post.rating }} </h6>
                        <p class="card-text"> {{ post.comment }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>