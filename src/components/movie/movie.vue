<template>
<div>
	<div class="movie">
	    <header-comm></header-comm>
	    <div>
		    <header>
		    	<span @click="select">
		    		{{city}}
		    	</span>
		   	    <div v-for="(item, index) in dataList" v-text="item" :class="{active: index == setIndex}" @click="setAction(index)" ></div>
		   	    <span @click="serachAction">
		   	    	<img src="../../assets/search.png" alt="" />
		   	    </span>
		    </header>
		    <loading class="load" v-show="isFlag == true"></loading>
			<keep-alive>
		       <component :is="hcom[setIndex]" v-show="isFlag == false"></component>
		    </keep-alive>
       </div> 
	</div>
    <router-view></router-view>
</div>
</template>

<script>
import vue from 'vuex'
import Hot from './hot'
import Coming from './coming'
import {mapState} from 'vuex'
import loading from '../../common/loading/loading'
export default {
	components: {
		Hot,
		Coming,
		loading
	},
		data(){
			return {
			    dataList: ['正在热映', '即将上映'],
			    setIndex: 0,
			    hcom: ["hot", "Coming"],
			    num: 0,
			    isFlag: true
			}
		},
		computed: {
			 ...mapState({
			   	     	cityId: state=>state.city.cityID,
			   	     	city: state=>state.city.city
   	     })
		},
		watch: {
			city(newcity, oldcity){
				return newcity
			}
		},
		methods: {
			setAction(index){
				this.setIndex = index
//				console.log(vue)
//				console.log(this.city)
//				console.log(this.$store)
			},
			serachAction(){
				this.$router.push({name: 'search'})
			},
			select(){
				this.$router.push({
					name: "addr"
				})
			},
		},
		created(){
			this.$center.$on("aAction", id=>{
				this.$router.push({
					name: 'movieDetail',
					params: {
						movieId: id
					}
				})
			})
			this.$center.$on("ev", fl=>{
				this.isFlag = fl 
			})
		}
	}
</script>

<style lang="scss" scoped>
.movie {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0.49rem;
	.load {
		position: absolute;
		left: 50%;
		top: 88px;
		z-index: 4;
		transform: translateX(-50%);
	}
	header{
		width: 100%;
		height: 0.44rem;
		border-bottom: 1px solid #e6e6e6;
		position: absolute;
		top: 0.44rem;
		left: 0;
		display: flex;
		text-align: center;
		line-height: 0.44rem;
		font-weight: 700;
		color: #666;
		justify-content: flex-start;
		div, span{
			flex: 1;
			font-size: 0.15rem;
			
		}
		div.active {
			 color: #f03d37;
             border-bottom: 2px solid #f03d37;
		}
		span:first-of-type {
			font-size: 0.15rem;
			font-weight: 400;
			padding-right: 0.1rem;
		}
		span:first-of-type::after {
			content: "";
			display: inline-block;
            width: 0;
            height: 0;
            border: 0.06rem solid transparent;
            border-top: 0.06rem solid #666;
            transform: translateY(0.04rem); 
		}
		span:last-of-type img {
			width: 0.2rem;
			height: 0.2rem;
			margin-top: 0.12rem;
			transform: translateX(0.2rem);
		}
	}
}		
</style>