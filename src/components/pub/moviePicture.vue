<template>
    <div class="picture" v-cloak>
    	<div class="bg">
    		
    	</div>
    	<div class="mb">
    		
    	</div>
        <div class="detail">
        	<div class="left">
        		<img :src="img" alt="" />
        	</div>
        	<div class="right">
        		<div class="one">
        			{{detail.nm}}
        		</div>
        		<div class="two">
        			{{detail.enm}}
        		</div>
        		<div class="three" v-if="detail.sc != 0">
        			<span>{{detail.sc}}</span>
        			<span class="pl" v-cloak>{{parseInt(detail.snum/1000)/10}}万人评</span>
        		</div>
        		<div class="three" v-else-if="detail.sc == 0">
        			<span>{{detail.wish}}人想看</span>
        		</div>
        		<div class="four">
        			{{detail.cat}}
        		</div>
        		<div class="five" v-cloak>
        			{{detail.src}}{{'/'+ detail.dur + '分钟'}}
        		</div>
        		<div class="six">
        			{{detail.pubDesc}}
        		</div>
        	</div>
        </div>
    </div>	
</template>

<script>
export default {
	data(){
		return {
			detail: '',
			img: '',
			cinames: ''
		}
	},
	created(){
			this.$center.$on('val', value=>{
				this.detail = value
				this.img = this.detail.img.replace(/\w.h/, '148.208')
				console.log(this.detail)
			})
			this.$center.$on('cin', value=>{
				this.cinames = value
				console.log(value)
	
			})
	}
}	
</script>


<style lang="scss" scoped>
.picture {
	width: 3.75rem;
	height: 1.88rem;
	position: absolute;
	top: 0.44rem;
	left: 0;
	[v-cloak]{
    display: none;
   }
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
		
		display: flex;
		justify-content: flex-start;
        padding: 0.19rem 0.3rem 0.19rem 0.15rem;
        .left {
        	width: 1.1rem;
        	height: 1.5rem;
        	/*background: #fff;*/
        	img {
        		width: 100%;
        		height: 100%;
        	}
        }
        .right{
        	flex: 1;
        	padding-left: 0.12rem;
        	.one {
        		width: 100%;
        		font-size: 0.2rem;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #fff;
				transform: translateY(-0.06rem);
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
        	}
        	.two {
        		width: 2.0rem;
        		margin-top: 0.02rem;
			    font-size: 0.12rem;
			    color: #fff;
			    opacity: .8;
			    text-overflow: ellipsis;
			    overflow: hidden;
			    white-space: nowrap;
			
        	}
        	.three {
        		width: 100%;
        		
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
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}        		
        	}
        	.four {
        		width: 100%;
        		
				letter-spacing: 0.03rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
        	}
        	.five, .six, .four {
        		width: 100%;
        		
        		margin-top: 0.1rem;
				font-size: 0.12rem;
				color: #fff;
				opacity: .8;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
        	}
        }
	}
}	
	
	
</style>