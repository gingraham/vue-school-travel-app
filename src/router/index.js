import { createRouter, createWebHistory } from 'vue-router'
//import the home page as the default view or page seen.
import Home from '@/views/Home.vue'

//initialize routes as an array of objects.
const routes = [
    { path: '/', name: 'Home', component: Home },
    //lazy loading with the ()=> import makes the file lighter because no data is used until called.
    //page/:id. the :id is a dynamic variable allows anything to be passed in.
    { path: '/destination/:id/:slug', name:'destination.show',component: ()=>import('../views/DestinationShow.vue') }
    ]
const router = createRouter({
    history: createWebHistory(),
    //references the routes array of paths above
    routes,
    //allow to change styling of nav links on hover.
    linkActiveClass: 'vue-school-active-link'
    })
    //allow the router component to be connected to 
export default router