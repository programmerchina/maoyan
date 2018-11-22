<template>
	<div class="cin">
		<div class="in">
			<div class="one">
				<span class="one_one">17:50</span>
				<span class="two_two"><i>19:37</i>散场</span>
			</div>
			<div class="two">
				<span class="spa_one">英语&nbsp;3D</span>
				<span class="spa_two">3号厅</span>
			</div>
			<div class="three">
				<div class="pri_one">
					<span class="seller">
						<em style="font-size: 0.11rem;">￥</em>
						<em>28</em>
					</span>
					<span class="rig">
						<div class="m">折扣卡</div>
						<div class="g">￥20</div>
					</span>
				</div>
				<div class="pri_two"></div>
			</div>
			<div class="four"></div>
		</div>
	</div>
</template>

<script>
export default {
	
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
			overflow-x: hidden;
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
					width: 0.54rem;
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
						flex: 1;
						font-size: 0.1rem;
					}
					
				}
			}
			.pri_two {
				flex: 1;
			}
    	}
    	.four {
    		flex: 1;
    	}
    }
}	
	
	
</style>