import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes:  RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/login.vue'),
	},
	{
		path: '/ai',
		name: 'Ai',
		component: () => import('../views/ai/ai.vue'),
	},
];

export default createRouter({
	history: createWebHashHistory(),
	routes,
});
