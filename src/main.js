import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Common from './common'

Vue.use(Common);

Vue.prototype.$center = new Vue({})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
