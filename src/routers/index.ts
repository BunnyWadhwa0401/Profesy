import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Inventory from '../views/Inventory.vue'

const router =createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/inventory',
            component: Inventory
        }
    ]
})

export default router