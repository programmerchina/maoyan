export default {
  namespaced: true,
  state: {
     city: localStorage.getItem('city')?localStorage.getItem('city'):'深圳',
     cityID: localStorage.getItem('cityID')?localStorage.getItem('cityID'):30
  },
  mutations: {
      mutationsCityAction(state, params){
      	 state.city = params
      	 console.log(11111)
      },
      mutationsCityIdAction(state, params){
      	 state.cityID = params
      }
  },
  actions: {
      actionsCityAction(contest, params){
      	
     }
  }
}
