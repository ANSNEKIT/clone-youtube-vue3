import { createRouter, createWebHashHistory } from 'vue-router'

import LayoutDefault from '@/layouts/LayoutDefault.vue'
import Home from '@/pages/Home.vue'

const routes = [{ path: '/', name: 'home', component: Home, meta: { layout: LayoutDefault } }]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
