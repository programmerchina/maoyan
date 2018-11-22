<template>
	<div class="cinamedetail">
		<header-comm></header-comm>
		<div class="add">
		     <div class="add_top">
		         <div class="p">
		             <p class="pone">东海国际影城</p>
		             <p class="ptwo">宝安区福永街道桥头社区永福路120号（东海百货4楼）</p>
		         </div>
		         <div class="add_top_right">
		         	  <img src="" alt="" />
		         </div>
		     </div>
		     <div class="pic">
		     	
		     </div>
		     <div class="p_b">
		     	<p class="on">
		     		<span>毒液：致命守护者</span>
		     		<span class="col">9.3分</span>
		     	</p>
		     	<p class="line">
		     		 107分钟 | 动作 | 汤姆·哈迪
		     	</p>
		     </div>
		</div>
		<!--////-->
		<div class="day">
			<p>今天11月22日</p>
			<p>今天11月23日</p>
		</div>
		<!--////-->
		<cin></cin>
	</div>
</template>

<script>
import { cinameDet } from '../../ser/appService'
import cin from './cin'
export default {
//	porps: {
//		movieId: Number,
//		data: String
//	},
		components: {
			cin
		},
	created(){
		console.log(this.$route.query.movieId)
		console.log(this.$route.query.data)
		cinameDet(this.$route.query.movieId, this.$route.query.cinameId).then(val=>{
			console.log(val)
		})
	}
}
</script>

<style lang="scss" scoped>
.cinamedetail {
	width: 100%;
	height: 100000px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 8;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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
			background: #000000;
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
		width: 375rem;
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