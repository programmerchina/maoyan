<template>
	<div class="ciname_search">
	        <header-comm></header-comm>
		 	<div class="cinema_s">
				   <input class="se" placeholder="搜影院" ref='searVal' v-model="val">
				   <span>取消</span>

			</div>
			<div class="history"></div>
			<div class="list">
			      <app-content :style="{top: '0.89rem', bottom: '0rem', background: '#fff'}" ref='xx'>
			           <div>   	
				   	     <list-ot :cinamelist="item" v-for="(item, index) in cinameList"></list-ot>
				   	   </div>	
				  </app-content>
			</div>
	</div>
</template>

<script>
import {searchCinameList} from '../../ser/cinameService'
import {mapState} from 'vuex'
export default {
	data(){
		return {
			cinameList: [],
			val: ''
		}
	},
	computed: {
		...mapState({
			cityId: state=>state.city.cityID,
		})
	},
	watch: {
		val(newVal, oldVal){
			if(newVal){
				this.searchAC()
				console.log(newVal,oldVal)
			}
		}
	},
	methods: {
		searchAC(){
					searchCinameList({k: this.$refs.searVal.value, Id: this.cityId, stype: 2}).then(value=>{
						if(this.val){
							this.cinameList = value;
							console.log(this.val)
						}
						else{
							this.cinameList = []
				}
		    })
		}
	}
}
</script>

<style lang="scss" scoped>
.ciname_search {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 6;
	background: #f5f5f5;	
}
	.cinema_s {
		width: 3.75rem;
		height: 0.45rem;
		position: absolute;
		top: 0.44rem;
		left: 0;
		background: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		
		span {
			flex: 1;
			font-size: 0.15rem;
		    color: #f03d37;;
		}
		.se {
            width: 2.8rem;
            height: 0.3rem;
            display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.13rem;
			color: #b2b2b2;
			margin-left: 0.15rem;
			border: .5px solid #e6e6e6;
			border-radius: 0.05rem;
			margin-right: 0.08rem;
			background: #fff;
			-webkit-box-flex: 1;
            flex-grow: 1;
            outline: none;
            padding-left: 0.25rem;
            background: url(../../assets/ciname/index.png) no-repeat 0.05rem center;
            background-size: 0.14rem 0.14rem;
            background-color: #fff;
           
        }
	}
	
</style>