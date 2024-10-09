<script setup>
import { ref } from 'vue';

// FOR FIREBASE
import storage from '../../firebaseConfig';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';

// FUNCTIONS TO MAKE API CALLS TO THE BACKEND
import { createNewPost } from '@/services/PostService';

// FORM INPUT VARIABLES
var location = ref('')
var image = ref('')
var imageURL = ref('')
var rating = ref('')
var comment = ref('')

// SUCCESS OR FAILURE MSG
var repsonseMsg = ref('')

function handleImageUpload() {
    image.value = event.target.files[0]
}

async function handlePostBtnClicked() {

    // THIS UPLOADS THE IMAGE TO FIREBASE AND ASSIGNS THE IMAGE URL TO THE "imageURL" VARIABLE
    if (image.value) {
        let currentDate = new Date()
        let imageStorageRef = storageRef(storage, `images/${image.value.name} ${currentDate}`)
        let upload = await uploadBytes(imageStorageRef, image.value)
        imageURL.value = await getDownloadURL(imageStorageRef)

        let response = await createNewPost(location.value, imageURL.value, rating.value, comment.value)

        if (response.status === 200) {
            repsonseMsg.value = 'Post uploaded successfully!'
        }
        else {
            repsonseMsg.value = response
        }
    }

    location.value = ''
    image.value = ''
    rating.value = ''
    comment.value = ''

}
</script>

<template>
    <div class="container mt-5">
        <div class="row mb-3">
            <div class="col">
                <label for="exampleFormControlInput1" class="form-label"> Enter location </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Location"
                    v-model="location">
            </div>
            <div class="col align-content-center">
                <label for="exampleFormControlInput1" class="form-label"> Upload Photo </label>
                <input type="file" class="form-control" accept="image/*" @change="handleImageUpload">
            </div>
        </div>
        <div class="row mb-3 w-50">
            <p class="mb-0"> Rating: </p>
            <div class="form-check col ms-1">
                <input class="form-check-input" type="radio" name="rating" value="5" id="fiveStars" checked
                    v-model="rating">
                <label class="form-check-label" for="fiveStars">
                    5 stars
                </label>
            </div>
            <div class="form-check col ms-1">
                <input class="form-check-input" type="radio" name="rating" value="4" id="fourStars" v-model="rating">
                <label class="form-check-label" for="fourStars">
                    4 stars
                </label>
            </div>
            <div class="form-check col ms-1">
                <input class="form-check-input" type="radio" name="rating" value="3" id="threeStars" v-model="rating">
                <label class="form-check-label" for="threeStars">
                    3 stars
                </label>
            </div>
            <div class="form-check col ms-1">
                <input class="form-check-input" type="radio" name="rating" value="2" id="twoStars" v-model="rating">
                <label class="form-check-label" for="twoStars">
                    2 stars
                </label>
            </div>
            <div class="form-check col ms-1">
                <input class="form-check-input" type="radio" name="rating" value="1" id="oneStar" v-model="rating">
                <label class="form-check-label" for="oneStar">
                    1 star
                </label>
            </div>
        </div>

        <div class="row mb-3">
            <div class="mb-3">
                <label for="comments" class="form-label"> Comments </label>
                <textarea class="form-control" id="comments" rows="3" placeholder="Enter comments here"
                    v-model="comment"></textarea>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-primary" @click="handlePostBtnClicked"> Post! </button>
            </div>
        </div>

        <div class='row'>
            {{ repsonseMsg }}
        </div>
    </div>

</template>