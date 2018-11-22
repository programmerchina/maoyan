import Vue from 'vue'
import Router from 'vue-router'
//引入需要路由操作的组件
//import Cinema from '../components/cinema/cinema'
//import Mine from '../components/mine/mine'
//import Movie from '../components/movie/movie'
////import Movie_search from '../components/movie/movie_search'
//import Addr from '../components/pub/addr'
//import CinameSearch from '../components/cinema/cinameSearch'
//import MovieDetail from '../components/pub/cinamedetails'

Vue.use(Router)

export default new Router({
	//模式
  mode: 'history',
  //路由配置规则
  routes: [
    {
    	name: 'movie',
    	path: '/movie',
    	component: ()=>import('../components/movie/movie'),
    	children: [
    	      {
    	      	name: 'search',
    	      	path: 'search',
    	      	component: ()=>import('../components/movie/movie_search')
    	      },
    	       {
    	      	name: 'addr',
    	      	path: 'addr',
    	      	component: ()=>import('../components/pub/addr')
    	      },
    	      {
    	      	name: "movieDetail",
    	      	path: 'movieDetail/:movieId',
    	      	component: ()=>import('../components/pub/cinamedetails'),
    	      	props: true,
    	      	children: [
    	      	     {
    	      	     	name: "cinameMovie",
    	      	     	path: "cinameMovie",
    	      	     	component: () => import('../components/pub/cinamedetail_move')
    	      	     }
    	      	
    	      	]
    	      }
    	]
    },
    {
    	name: 'mine',
    	path: '/mine',
    	component: ()=>import('../components/mine/mine')
    	
    },
    {
    	name: 'cinema',
    	path: '/cinema',
    	component: ()=>import('../components/cinema/cinema'),
    	children: [
    	       {
    	      	name: 'addr',
    	      	path: 'addr',
    	      	component: ()=>import('../components/pub/addr')
    	      },
    	      {
    	      	name: 'CinameSearch',
    	      	path: 'CinameSearch',
    	      	component: ()=>import('../components/cinema/cinameSearch')
    	      	
    	      }
    	]
    	
    },
    {
    	path: "**",
    	redirect: "/movie"
    }
  ]
})
