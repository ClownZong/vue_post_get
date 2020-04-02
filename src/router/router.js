import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		// 登录
		{
			path: "/login",
			name: "login",
			meta: {
				title: "登录"
			},
			component: () => import("@/components/login")
		},
		{
			path: "/register",
			name: "register",
			meta: {
				title: "注册"
			},
			component: () => import("@/components/register")
		},
		{
			path: "/",
			redirect: "/login"
		}
	]
})

export default router