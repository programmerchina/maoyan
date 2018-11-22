<template>
	<div class="movie">
		<div>
	   <header-comm></header-comm>
	   <div class="cinema_s">
	   	   <span class="sp" @click="action">
		          {{city}}
		   </span>
		   <div class="se" @click="searchAction">
		   	    <img src="../../assets/ciname/index.png" alt="" />
		   	    <span>搜影院</span>
		   </div>
	   </div>
	  
	  
	  <daoh></daoh>
	  
	  
	   <app-content :style="{top: '1.29rem', bottom: '0rem'}" @cinameAc="loadMore" ref="resh" mod="ciname">
         <div>   	
	   	     <list-ot :cinamelist="item" v-for="(item, index) in cinamelist"></list-ot>
	   	   </div>	
	   </app-content>
	</div>
	<router-view></router-view>
	</div>
</template>

<script>
import {getCinameList} from '../../ser/cinameService'
import {mapState} from 'vuex'
import daoh from './daohan'
export default {
    data(){
    	return {
    		num: 1,
    		cinamelist: [],
    		length: 20
    	}
    },
    components: {
    	daoh
    },
    methods: {
    	action(){
    		this.$emit("ev", "cinema")
    		this.$router.push({
					name: "addr"
		    })
    		console.log(this.getdata)
    	},
    	loadMore(){
    	  	console.log(1)
    		
    		this.length += 20;
    		getCinameList({id: this.cityId, date: this.getdata, limit: this.length}).then(data=>{
    	  	this.cinamelist = data
    	  	console.log(data)
			this.$refs.resh.refresh();
    	      });
       },
       searchAction(){
       	    this.$router.push({
       	    	name: 'CinameSearch'
       	    })
       }
    },
    watch: {
    	city(newV, oldV){
    		newV == oldV?"":this.length=20
    	}
    },
    computed: {
   	     ...mapState({
   	     	cityId: state=>state.city.cityID,
   	     	city: state=>state.city.city
   	     }),
   	     getdata(){
   	     	var day = new Date();
   	     	var mytime=day.toLocaleDateString().replace(/\//g, '-');
   	     	return mytime
   	     }
   	     
   },
    created(){
    	  getCinameList({id: this.cityId, date: this.getdata, limit: this.length}).then(data=>{
    	  	this.cinamelist = data
    	  	console.log(data)
    	  });
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
		.sp {
			font-size: 0.15rem;
			font-weight: 400;
			padding-right: 0.03rem;
			margin-left: 0.15rem;
			&::after {
			content: "";
			display: inline-block;
            width: 0;
            height: 0;
            border: 0.06rem solid transparent;
            border-top: 0.06rem solid #666;
            transform: translateY(0.04rem); 
            }
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
			margin-right: 0.15rem;
			background: #fff;
			-webkit-box-flex: 1;
            flex-grow: 1;
            img {
            	width: 0.14rem;
            	height: 0.14rem;
            }
        }
	}
}	
</style>