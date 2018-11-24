<template>
	<div class="cinamedetail">
		<header-comm></header-comm>
		<div class="add">
		     <div class="add_top">
		         <div class="p">
		             <p class="pone">{{listData.cinemaData.nm}}</p>
		             <p class="ptwo">{{listData.cinemaData.addr}}</p>
		         </div>
		         <div class="add_top_right">
		         	  <img src="" alt="" />
		         </div>
		     </div>
		     <div class="pic" ref="pic">
		     	<div class="pic_in swiper-wrapper" :style="{width: wid}">
		     		<div class="swp swiper-slide" v-for="(item, index) in listData.showData.movies">
		     			<img :src="item.img.replace(/w.h/, '148.208')" alt="" />
		     		</div>
		     	</div>
		     </div>
		     <div class="p_b">
		     	<p class="on">
		     		<span>{{dat[0].nm}}</span>
		     		<span class="col">{{dat[0].sc!="0.0"?dat[0].sc+'分':"暂无评分"}}</span>
		     	</p>
		     	<p class="line">
		     		 {{dat[0].desc}}
		     	</p>
		     </div>
		</div>
		<!--////-->
		<div class="day">
			<p>今天11月22日</p>
			<p>今天11月23日</p>
		</div>
		<!--////-->
		<div class="gp">
			<div class="vip">
				<div class="vip_in">
						<span class="vone">{{listData.showData.vipInfo[0].tag}}</span>
						<span class="vtwo">{{listData.showData.vipInfo[0].title}}</span>
						<span class="vthree">{{listData.showData.vipInfo[0].process}}</span>
				</div>
			</div>
			<cin :detail="item" :pri="$route.query.pri" :timed="constime" v-for="(item, index) in detail[0].plist"></cin>
		</div>
		<div class="combo">
			<div class="out">
				 <div class="title">
				 	影院超值套餐
				 </div>
				 <bmh :deal="item" v-for="(item, index) in listData.dealList.dealList"></bmh>
			</div>
		</div>
	</div>
</template>

<script>
import { cinameDet } from '../../ser/appService'
import cin from './cin'
import bmh from './bmh'
import Swiper from 'swiper'
export default {
//	porps: {
//		movieId: Number,
//		data: String
//	},  
      data(){
      	return {
      		listData: [],
      		movieId: this.$route.query.movieId,
      		detail: [],
      		constime: 0,
      		dat: []
      	}
      },
		components: {
			cin,
			bmh
		},
		computed: {
			wid(){
				return 0.9*this.listData.showData.movies.length+'rem'
			}
		},
		watch: {
			listData(){
				this.$nextTick(()=>{
					this.useSwiper()
				})
			}
		},
	created(){
//		console.log(swiper)
//		console.log(this.$route.query.movieId)
//		console.log(this.$route.query.cinameId)
		cinameDet(this.$route.query.movieId, this.$route.query.cinameId).then(val=>{
			
			this.listData = val
			let cinlist = this.listData.showData.movies.filter(item=>{
				
				return item.id == this.movieId? item : null
			})
			this.dat = cinlist
			this.detail = cinlist[0].shows
			this.constime = cinlist[0].dur 
			console.log(cinlist)
		})
	},
	methods: {
		useSwiper(){
			let mySwiper = new Swiper(".pic",{
				slidesPerView: 5,
                centeredSlides: true,
                slideToClickedSlide: true,
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.cinamedetail {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 8;
	/*background: #fff;*/
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	.gp {
		width: 100%;
	    background: #fff;
	    .vip {
	    	width: 3.75rem;
	    	height: 0.42rem;
	    	background-color: #fff5ea;
	    	display: flex;
	    	justify-content: center;
	    	.vip_in {
	    		width: 3.45rem;
	    		height: 0.42rem;
	    		display: flex;
	    		justify-content: flex-start;
	    		.vone {
	    			border-radius: 0.02rem;
					font-size: 0.1rem;
					line-height: 0.15rem;
					height: 0.15rem;
					width: 0.34rem;
					text-align: center;
					color: #fff;
					margin-top: 0.13rem;
					margin-right: 0.1rem;
					background-color: #ff941a;
	    		}
	    		.vtwo {
	    			width: 2.4rem;
	    			height: 0.42rem;
	    			line-height: 0.42rem;
	    			text-align: left;
	    			text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					font-size: 0.12rem;
					color: #fa9600;
	    		}
	    		.vthree {
	    			flex: 1;
	    			line-height: 0.42rem;
					color: #999;
					font-size: 0.12rem;
	    		}
	    	}
	    }
	}
	.combo {
		width: 100%;
		background: #fff;
		border-top: 0.1rem solid #eee;
		.out {
			margin: 0 0 0 0.15rem;
			.title {
				width: 3.6rem;
				height: 0.45rem;
				line-height: 0.45rem;
				height: 0.45rem;
				font-size: 0.15rem;
				color: #666;
			}
		}
	}
	.add {
		width: 100%;
		height: 2.76rem;
		margin-top: 44px;
		background: #fff;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		.p_b {
			flex: 1;
			padding: 11px 15px;
			text-align: center;
			border-bottom: 1px solid #eee;
			.on {
				    height: 0.24rem;
				    line-height: 0.24rem;
				    font-size: 0.17rem;
				    color: #333;
				    font-weight: 700;
				    text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					display: flex;
					justify-content: center;
					.col {
						color: #ffb400;
						font-size: 0.16rem;
						margin-left: 0.08rem;
						padding-top: 0.02rem;
					}
				
			}
			.line {
				margin-top: 0.02rem;
				height: 0.19rem;
				line-height: 0.16rem;
				font-size: 0.13rem;
				color: #999;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				margin-top: 0.08rem;
			}
		}
		.pic {
			width: 100%;
			height: 1.35rem;
			background: #222222;
			overflow: auto;
			.pic_in {
				height: 1.27rem;
				/*padding: 0.2rem 0.15rem 0.2rem 0.05rem;*/
			    display: flex;
			    align-items: center;
				.swp {
					width: 0.75rem;
					height: 0.95rem;
					float: left;
					padding-left: 0.1rem;
					img {
						width: 100%;
						height: 100%;
						float: left;
					}
				}
			}
		    
		}
		.add_top {
			position: relative;
            padding: 0.15rem 1rem 0.15rem 0.15rem;
            .p{
            	.pone {
            		font-size: 0.17rem;
					line-height: 0.24rem;
					font-weight: 700;
					color: #333;
            	}
            	.ptwo {
            		    margin-top: 0.02rem;
					    font-size: 0.13rem;
					    line-height: 0.19rem;
					    color: #999;
					    text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;

            	}
            }
            .add_top_right {
            	position: absolute;
				right: 0;
				top: 50%;
				width: 0.7rem;
				height: 0.31rem;
				transform: translateY(-50%);
				border-left: 1px solid #d8d8d8;
				text-align: center;
				display: flex;
				justify-content: center;
				img {
				    /*float: left;*/
					width: 0.19rem;
					height: 0.22rem;
					margin-top: 0.05rem;
					
				}
            }
		}
	}
	.day {
		width: 3.75rem;
		height: 0.45rem;
		display: flex;
		background: #fff;
        justify-content: flex-start;
        border-bottom: 1px solid #eee;
        p {
        	margin: 0 0.15rem;
			height: 0.45rem;
			text-align: center;
			line-height: 0.45rem;
			font-size: 0.14rem;
			
        }
	}
}
	
</style>