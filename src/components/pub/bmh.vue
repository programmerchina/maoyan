<template>
	<div class="bmh">
		<div class="img">
			<img :src="deal.imageUrl.replace(/w.h/,'440.0')" alt="" />
			<span v-if="deal.cardTag">HOT</span>
		</div>
		<div class="rig">
			<div class="title">
				<span>{{deal.recommendPersonNum>=3?"多人":(deal.recommendPersonNum==1?"单人":"双人")}}</span>	
				{{deal.title}}
			</div>
			<span class="pri">
				<span>￥</span>
				<span style="font-size: 0.17rem;">{{deal.price}}</span>
			</span>
			<div class="ys">
				{{deal.curNumberDesc}}
			</div>
			<div class="buy">
				去购买
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["deal"]
}
</script>

<style lang="scss" scoped>
.bmh {
	cursor: pointer;
	position: relative;
    width: 100%;
	padding: 0.13rem 0;
	overflow: hidden;
    border-top: 1px solid #eee; 
    .img {
    	display: inline-block;
		width: 0.92rem;
		height: 0.92rem;
		float: left;
		span {
				position: absolute;
				left: 0;
				top: 0.13rem;
				width: 0.36rem;
				height: 0.18rem;
				line-height: 0.18rem;
				background-color: #fa5939;
				font-size: 0.12rem;
				padding: 0 0.05rem;
				color: #fff;
				border-bottom-right-radius: 2px;
			}
		img {
			width: 100%;
			height: 100%;
			float: left;		
		}
    }
	.rig {
		margin: 0 0.15rem 0 1.02rem;
		height: 0.92rem;
		overflow: hidden;
		.ys {
			position: absolute;
			bottom: 0.5rem;
			right: 0.15rem;
			line-height: 0.16rem;
			height: 0.16rem;
			font-size: 0.12rem;
			color: #999;
		}
		.buy {
			position: absolute;
			right: 0.15rem;
			bottom: 0.16rem;
			display: inline-block;
			padding: 0 0.08rem;
			height: 0.27rem;
			line-height: 0.27rem;
			font-size: 0.12rem;
			border-radius: 3px;
			color: #fff;
			background-color: #f03d37;
		}
		.title {
			font-size: 0.14rem;
			line-height: 0.18rem;
			color: #333;
			overflow: hidden;
			text-overflow: ellipsis;
			span {
				vertical-align: top;
				margin-top: 0.01rem;
				margin-right: 0.07rem;
				padding: 0 0.04rem;
				font-size: 0.1rem;
				line-height: 0.15rem;
				height: 0.15rem;
				background: #f90;
				border-radius: 2px;
				color: #fff;
			}
		}
		.pri {
			color: #f03d37;
			font-size: 0.14rem;
			position: absolute;
			bottom: 0.15rem;
		}
	}
}	
</style>