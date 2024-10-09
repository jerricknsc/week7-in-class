import AllPosts from '@/views/AllPosts.vue'
import LandingPage from '@/views/LandingPage.vue'
import CreatePost from '@/views/CreatePost.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing page',
            component: LandingPage
        },
        {
            path: '/post',
            name: 'post',
            component: CreatePost
        },
        {
            path: '/all-posts',
            name: 'viewPosts',
            component: AllPosts
        },        
    ]
})

export default router
