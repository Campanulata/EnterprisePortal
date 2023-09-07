import { createRouter,createWebHashHistory } from "vue-router";

// 路由配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/residential',
        name: 'Residential',
        component: () => import('../views/product/Residential.vue'),
    },
    {
        path: '/commercial',
        name: 'Commercial',
        component: () => import('../views/product/Commercial.vue'),
    },
    {
        path: '/support',
        name: 'Support',
        component: () => import('../views/Support.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
]
// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    router:true
})
// 路由守卫
export default router