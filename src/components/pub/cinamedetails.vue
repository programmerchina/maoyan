<template>
<div>
	<div class="top">
	    	    <header-comm></header-comm>
			    <loading class='load' v-show="isFlag==true"></loading>
			    <div v-show="isFlag==false">
			    <pic></pic>
		   <div class="ing">  
			    <day></day>
			    <div class="body" :style='{height: "94%"}'>
			        <daoh style="top: 0rem"></daoh>
			        <app-content :style="{top: '0.4rem', height: '5.83rem'}" ref="resh" mod="ciname">
				         <div>   	
					   	     <list-ot :movieId='movieId' :cinamelist='item' v-for="(item, index) in cinemas.cinemas"></list-ot>
					   	 </div>	
			        </app-content>
	             </div>
	       </div>
	            </div>
	</div>
	<router-view></router-view>
</div>
</template>

<script>
	import pic from './moviePicture'
	import day from './day'
	import daoh from '../cinema/daohan'
	import {filterCiname, detailMovie, update, tomyMovieId} from '../../ser/appService'
	import {mapState} from 'vuex'
	import loading from '../../common/loading/loading'
	export default {
		props: {
			movieId: Number
		},
		name: 'movie-detail',
		data(){
			return {
				
				detail: {},
				cinemas: '',
				len: 0,
				isFlag: true
				
			}
		},
		components: {
			pic,
			day,
			daoh,
			loading
		},
		watch: {
			detail(newVal, oldVal){
				this.$center.$emit('val', newVal)
			},
			cinames(newVal, oldVal){
				this.$center.$emit('cin', newVal)
			}
		},
		computed: {
			 ...mapState({
				cityId: state=>state.city.cityID,
			})
		},
		created(){
			let day = new Date()
			console.log(this.movieId)
			let a = ()=> new Promise((resolve,reject)=>{
					filterCiname().then(value=>{
						console.log(value)
						resolve()
					})
				})
			let b = ()=> new Promise((resolve,reject)=>{
					detailMovie(this.movieId).then(val=>{
						let {nm,enm,sc,snum,wish,cat,src,pubDesc,img,dur,id} = val.detailMovie
						this.detail = {nm,enm,sc,snum,wish,cat,src,pubDesc,img,dur,id}
						console.log(this.detail)
						resolve()
					})
				 })
			let c = ()=> new Promise((resolve,reject)=>{
					update({rad: Date.now(),cid: this.cityId,day: day.toLocaleDateString().replace(/\//g,"-") ,mid: this.movieId}).then(va=>{
						this.cinemas = va
						this.len = va.cinemas.length*1.25 + 'rem'
						console.log(va)
						resolve()
					})
				})
			let d = ()=> new Promise((resolve,reject)=>{
			       tomyMovieId().then(result=>{
						console.log(result)
						resolve()
					})
			  })
				
			Promise.all([a() , b(), c(), d()]).then(()=>{
				     this.isFlag = false
		     	}
			)
						
				
					
	
					
		
			
		}
	}
</script>

<style lang="scss" scoped="">
	.top {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 7;
		background: #fff;
		.load {
			position: absolute;
			left: 50%;
			top: 44px;
			transform: translateX(-50%);
		}
		.body {
			position: absolute;
			left: 0;
			top: 2.77rem;
			width: 100%;
			overflow: hidden;
			/*background: #000000;*/
		}
	}	
</style>