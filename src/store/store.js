import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import cityAddress from './cityAddress'
Vue.use(Vuex)

export default new Store({
  state: {
      username: "",
      password: ""
  },
  mutations: {

  },
  actions: {

  },
  modules: {
   	city: cityAddress
  }
})
