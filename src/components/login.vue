<template>
	<div>
		<input type="text" v-model="user" placeholder="用户名">
		<input type="password" v-model="password" placeholder="密码">
		<button @click="login()">登录</button>
	</div>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				user: "ad", // 用户名
				password: "pa" // 密码
			}
			// return {
			// 	loginInfo: {
			// 		user: "",
			// 		password: ""
			// 	}
			// };
		},
		methods: {
			login(){ // 登录
				if(this.user == "" || this.password == ""){
					alert("请输入信息")
				}else {
					this.$axios({
						url: "/user/login",
						method: "post",
						baseURL: "http://192.168.0.142:8888/v3",
						headers: {
							"Content-Type": "application/json",
							"user": this.user,
							"password": this.password
						},
						// data: {
						// 	user: "admin",
						// 	password: "admin"
						// }
					}).then(response => {console.log(response);
						// 返回结果展示
					}).catch(function(error) {console.log(error);});
				}
			}
		},
		// 钩子函数调用
		mounted() {
			// this.login()
		}
	}
</script>

<style>
</style>
