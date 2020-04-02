<template>
	<div>
		<span>用户</span>
		<input type="text" v-model="name" placeholder="用户名"/>
		<input type="text" v-model="email" placeholder="邮箱"/>
		<select v-model="orgName">
			<option>orgA</option>
			<option>orgB</option>
			<option>orgC</option>
		</select>
		<input type="checkbox" id="A" value="A" v-model="ruleList"/>
		<label for="A">A</label>
		<input type="checkbox" id="B" value="B" v-model="ruleList"/>
		<label for="B">B</label>
		<input type="checkbox" id="C" value="C" v-model="ruleList"/>
		<label for="C">C</label>
		<input type="password" v-model="password" placeholder="密码"/>
		<input type="password" v-model="repeatPassword" placeholder="重复密码"/>
		<button @click="register()">"注册"</button>
		<br />
		<span>orgName: {{ orgName }}</span>
		<br />
		<span>ruleList: {{ ruleList }}</span>
	</div>
</template>

<script>
	export default {
		name: "register",
		data() {
			return {
				orgName: "",
				ruleList: []
			}
		},
		methods:{
			register() { // 注册
				if(this.name == "" || this.password == "" || this.password != this.repeatPassword) {
					alert("填写信息有误，请确认")
				} else {
					this.$axios({
						url: "/user/register",
						method: "post",
						baseURL: "http://192.168.0.142:8888/v3",
						headers: {
							"Content-Type": "application/json",
							"user": this.user,
							"password": this.password
					},
					data:{
						name: this.name,
						password: this.password,
						email: this.email,
						repeatPassword: this.repeatPassword
					}
					}).then(response => {
						console.log(response)
					}).catch(error => {
						console.log(error)
					})
				}
			}
		},
		mounted() {
		}
	}
</script>

<style>
</style>
