import { createRouter,createWebHashHistory } from "vue-router";

// 路由配置
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
]
// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 路由守卫
export default router