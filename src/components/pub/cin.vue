<template>
	<div class="cin">
		<div class="in">
			<div class="one">
				<span class="one_one">{{detail.tm}}</span>
				<span class="two_two"><i>{{tim}}</i>散场</span>
			</div>
			<div class="two">
				<span class="spa_one">{{detail.lang}}&nbsp;{{detail.tp}}</span>
				<span class="spa_two">{{detail.th}}</span>
			</div>
			<div class="three">
				<div class="pri_one">
					<span class="seller">
						<em style="font-size: 0.11rem;">￥</em>
						<em>{{pri}}</em>
					</span>
					<span class="rig">
						<div class="m">{{detail.vipPriceName}}</div>
						<div class="g">￥{{detail.vipPrice}}</div>
					</span>
				</div>
				<div class="pri_two">
					{{detail.extraDesc}}
				</div>
			</div>
			<div class="four">
				<div class="btn">
					购票
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["detail","timed","pri"],
	data(){
		return {
			timedd: 0
		}
	},
	computed: {
		tim(){
			this.timedd = this.timed
			let hour = parseInt(this.timedd/60)
			let min = parseInt(this.timedd%60*100)/100
			let tarr = this.detail.tm.split(":")
			hour = hour + Number(tarr[0])
			min = min + Number(tarr[1])
			if(min>=60){
				min = min%60<10?"0"+min%60:min%60
				hour += 1
			}
			if(hour>=24){
				hour = "00"
			}
			return hour + ":" + min
		}
	},
	created(){
//		console.log(this.detail)
		
	},

}	
</script>

<style lang="scss" scoped>
em {
	font-style: normal;
}
.cin {
	padding: 0.17rem 0;
    margin-left: 0.125rem;
    border-bottom: 1px solid #eee;
    background: #fff;
    .in {
    	width: 3.63rem;
    	height: 0.42rem;
    	display: flex;
    	justify-content: flex-start;
    	.one {
    		width: 0.55rem;
    		height: 100%;
    		display: flex;
    		flex-direction: column;
    		justify-content: flex-start;
    		.one_one {
    			font-size: 0.2rem;
				color: #333;
				line-height: 1;
				white-space: nowrap;
    		}
    		.two_two {
    			margin-top: 0.1rem;
				color: #999;
				font-size: 11px;
				line-height: 1;
				white-space: nowrap;
				i {
					font-style: normal;
				}
    		}
    	}
    	.two {
    		margin-left: 0.17rem;
			width: 0.96rem;
			height: 100%;
			display: flex;
		    flex-direction: column;
		    justify-content: flex-start;
			.spa_one {
				margin-top: 0.02rem;
				line-height: 0.18rem;
				font-size: 0.13rem;
				color: #333;
				white-space: normal;
			}
			.spa_two {
				margin-top: 0.07rem;
				font-size: 0.11rem;
				color: #999;
				white-space: normal;
			}
    	}
    	.three {
    		width: 1.3rem;
    		height: 0.42rem;
    		flex: 0 1 auto;
			width: 1.3rem;
			margin-left: 0.05rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			.pri_one {
				width: 100%;
				height: 0.25rem;
				display: flex;
				justify-content: flex-start;
				.seller {
					line-height: 1;
					color: #f03d37;
					margin-top: 1px;
					font-size: 0.19rem;
				}
				.rig {
					height: 0.14rem;
					margin-top: 0.04rem;
					margin-left: 0.03rem;
					border: 1px solid #ff9000;
					border-radius: 0.02rem;
					font-size: 0.12rem;
					display: flex;
					justify-content: flex-start;
					.m {
						display: inline-block;
						color: #fff;
                        background-color: #f90;
                        padding: 0 2px;
                        width: 0.32rem;
                        height: 100%;
                        font-size: 0.1rem;
					}
					.g {
						padding: 0 0.02rem;
						font-size: 0.1rem;
					}
					
				}
			}
			.pri_two {
				flex: 1;
				margin-top: 0.05rem;
				font-size: 0.11rem;
				color: #999;
			}
    	}
    	.four {
    		flex: 1;
    		.btn {
    			width: 0.45rem;
    			height: 0.27rem;
    			line-height: 0.28rem;
				font-size: 0.12rem;
				background-color: #f03d37;
				color: #fff;
				border-radius:0.04rem;
				text-align: center;
    		}
    	}
    }
}	
	
	
</style>