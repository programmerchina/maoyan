<template>
    <div class="picture">
    	<div class="bg" style="background-image:url(//p0.meituan.net/71.100/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg)">
    		
    	</div>
    	<div class="mb">
    		
    	</div>
        <div class="detail">
        	<div class="left">
        		
        	</div>
        	<div class="right">
        		<div class="one">
        			毒液：致命守护者
        		</div>
        		<div class="two">
        			XXXXXX
        		</div>
        		<div class="three">
        			<span>9.3</span>
        			<span class="pl">(53.2万人评)</span>
        		</div>
        		<div class="four">
        			动作,惊悚,科幻
        		</div>
        		<div class="five">
        			美国/107分钟
        		</div>
        		<div class="six">
        			2018-11-09大陆上映
        		</div>
        	</div>
        </div>
    </div>	
</template>

<script>
export default {
	
}	
</script>


<style lang="scss" scoped>
.picture {
	width: 3.75rem;
	height: 1.88rem;
	position: absolute;
	top: 0.44rem;
	left: 0;
	.bg {
		width: 100%;
		height: 100%;
		z-index: -1;
		overflow: hidden;
		position: absolute;
		filter: blur(1.2rem);
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 1;	
	}
	.mb {
		position: absolute;
		z-index: -3;
		width: 100%;
		height: 100%;	
		opacity: 0.6;	
		background-color: #333;
	}
	.detail {
		height: 100%;
		display: flex;
		justify-content: flex-start;
        padding: 0.19rem 0.3rem 0.19rem 0.15rem;
        .left {
        	width: 1.1rem;
        	height: 1.5rem;
        	background: #fff;
        }
        .right{
        	flex: 1;
        	padding-left: 0.12rem;
        	.one {
        		font-size: 0.2rem;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #fff;
				transform: translateY(-0.06rem);
        	}
        	.two {
        		margin-top: 0.02rem;
			    font-size: 0.12rem;
			    color: #fff;
			    opacity: .8;
			
        	}
        	.three {
                  font-size: 0.18rem;
				  font-weight: 700;
				  color: #fc0;
				  margin-top: 0.06rem;
				  .pl {
				  	margin-top: 0.1rem;
					font-size: 0.12rem;
					color: #fff;
					opacity: .8;
					white-space: nowrap;
					font-weight: 700;
					margin-left: 0.1rem;
				}        		
        	}
        	.four {
				letter-spacing: 0.03rem;
        	}
        	.five, .six, .four {
        		margin-top: 0.1rem;
				font-size: 0.12rem;
				color: #fff;
				opacity: .8;
        	}
        }
	}
}	
	
	
</style>