<template>
	<div class="sert">
		<p class="sert_one">
		    <span>{{cinamelist.nm}}</span>
		    <span>
		    	<i>{{cinamelist.sellPrice}}</i>
		    	<span>元起</span>
		    </span>
		</p>
		<div class="sert_two">
			<p>{{cinamelist.addr}}</p>
			<span>{{cinamelist.distance}}</span>
		</div>
		<div class="sert_three">
			<span v-for="(item, key) in cinamelist.tag" v-if="item == 1" ></span>
			
		</div>
		<!--<div class="sert_four" v-if="cinamelist.promotion.cardPromotionTag">
			<img src="../../assets/ciname/ka.png" alt="" />
			<p>{{cinamelist.promotion.cardPromotionTag}}</p>
		</div>-->
	</div>
</template>
<script>
	export default {
		name: "list-ot",
		props: {
			cinamelist: Object
		},
		data(){
			return {
				allowRefund: "退",
				buyout: 0,
				cityCardTag: 0,
				deal: 0,
				endorse: "改签",
				hallType: ["CGS中国巨幕厅"],
				sell: "小吃",
				snack: "折扣卡"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sert {
		padding: 0.13rem 0.15rem 0.13rem 0;
		margin-left: 0.15rem;
		background-color: #fff;
		position: relative;
		overflow: hidden;
		width: 3.6rem;
		height: 1.25rem;
		border-bottom: 1px solid #eee;
		.sert_one {
			height: 0.23rem;
			display: flex;
		    justify-content: flex-start;
			span:nth-child(1){
				line-height: 0.23rem;
				font-size: 0.16rem;
				color: #000;	
			}
			span:nth-child(2) {
				font-size: 16px;
                color: #f03d37;
                i {
                	font-style: normal;
                	margin: 0 0.02rem 0 0.08rem;
                }
                span {
                	font-size: 0.11rem;
                }
			}
		}
		.sert_two {
			width: 3.45rem;
			height: 0.2rem;
			margin-top: 0.06rem;
			font-size: 0.13rem;
			display: flex;
			justify-content: flex-start;
			color: #666;
			p {
				width: 3rem;
				height: 0.2rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			span {
				flex: 1;
			}
		}
		.sert_three {
			width: 3.45rem;
			height: 0.17rem;
			height: 0.17rem;
			line-height: 0.17rem;
			margin-top: 0.04rem;
			margin-bottom: 0.04rem;
			overflow: hidden;
			font-size: 0;
			flex-shrink: 0;
			span {
				color: #589daf;
                border: 1px solid #589daf;
                height: 0.17rem;
                position: relative;
				display: inline-block;
				padding: 0 0.03rem;
				height: 0.15rem;
				line-height: 0.15rem;
				border-radius: 0.02rem;
				font-size: 0.1rem;
				margin: 0 0.02rem;
			}
		}
		.sert_four {
			width: 3.45rem;
			height: 0.21rem;
			color: #999;
			display: flex;
			justify-content: flex-start;
			img {
				width: 0.15rem;
				height: 0.14rem;
				margin-right: 0.08rem;
			}
			p {
				margin-left: 0;
				font-size: 0.11rem;
			}
		}
	}
</style>