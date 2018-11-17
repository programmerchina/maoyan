import Vue from 'vue'
import Router from 'vue-router'
//引入需要路由操作的组件
import Cinema from '../components/cinema/cinema'
import Mine from '../components/mine/mine'
import Movie from '../components/movie/movie'
import Movie_search from '../components/movie/movie_search'
import Addr from '../components/pub/addr'
import CinameSearch from '../components/cinema/cinameSearch'
import MovieDetail from '../components/pub/cinamedetails'

Vue.use(Router)

export default new Router({
	//模式
  mode: 'history',
  //路由配置规则
  routes: [
    {
    	name: 'movie',
    	path: '/movie',
    	component: Movie,
    	children: [
    	      {
    	      	name: 'search',
    	      	path: 'search',
    	      	component: Movie_search
    	      },
    	       {
    	      	name: 'addr',
    	      	path: 'addr',
    	      	component: Addr
    	      },
    	      {
    	      	name: "movieDetail",
    	      	path: 'movieDetail',
    	      	component: MovieDetail
    	      }
    	]
    },
    {
    	name: 'mine',
    	path: '/mine',
    	component: Mine
    	
    },
    {
    	name: 'cinema',
    	path: '/cinema',
    	component: Cinema,
    	children: [
    	       {
    	      	name: 'addr',
    	      	path: 'addr',
    	      	component: Addr
    	      },
    	      {
    	      	name: 'CinameSearch',
    	      	path: 'CinameSearch',
    	      	component: CinameSearch
    	      }
    	]
    	
    },
    {
    	path: "**",
    	redirect: "/movie"
    }
  ]
})
