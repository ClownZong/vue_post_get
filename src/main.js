import Vue from 'vue'
import App from './App.vue'
import VueAxiosPlugin from 'vue-axios-plugin'
import router from './router/router.js'

Vue.config.productionTip = false

Vue.use(VueAxiosPlugin, {
  // request interceptor handler
  reqHandleFunc: config => config,
  reqErrorFunc: error => Promise.reject(error),
  // response interceptor handler
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
