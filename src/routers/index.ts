import {createRouter, createWebHistory} from 'vue-router'
import Calender from '../views/Calender.vue'
import Home from '../views/Home.vue'
import Inventory from '../views/Inventory.vue'
import ProductPage from '../views/ProductPage.vue'

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
        },
        {
            path: '/calendar',
            component: Calender
        },
        {
            path: '/product',
            component: ProductPage
        }

    ]
})

export default router