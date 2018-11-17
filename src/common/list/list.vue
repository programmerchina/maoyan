<template>
	<li @click="djAction">
		        <p></p>
				<img :src="data.img"/>
			     <div class="right">
			     	<div class="right_one">
			     		<div class="title">
			     			<div class="title_left">
			     				{{data.nm}}
			     			</div>
			     			<div class="title_right" :class="{v3d: data.version == 'v3d imax'}" v-if='data.version == "v3d imax"'>
			     				
			     			</div>
			     		</div>
			     		<p v-if="data.globalReleased == true && data.sc == 0">
			     			暂无评分
			     		</p>
			     		<p v-else-if="data.globalReleased == true">
			     			<span class="people">观众评</span>
			     			<span class="evaluation">{{data.sc}}</span>
			     		</p>
			     		<p v-else-if="data.globalReleased == false">
			     			<span class="evaluation mm">{{data.wish}}</span>
			     			<span class="people">人想看</span>
			     		</p>
			     		<p class="p_t">
			     			{{data.star}}
			     		</p>
			     		<p class="p_three">
			     			{{data.showInfo}}
			     		</p>
			     	</div>
			     	<div class="right_two">
			     		<div class="btn" :class="{bg: data.globalReleased == false,bgg: data.globalReleased == false && data.showInfo == undefined}">
			     			{{data.globalReleased?btnList[0]:(data.showInfo != undefined?btnList[1]:btnList[2])}}
			     		</div>
			     	</div>
			     </div>
	</li>
</template>

<script>
	export default {
		props: {
			data: Object
		},
		name: "li-comm",
		data(){
			return {
				btnList: ["购票","预售","想看"]
			}
		},
		created(){
//			console.log(this.data)
		},
		methods: {
			djAction(){
				this.$center.$emit("aAction",'aa')
			}
		}		
	}
</script>
 
<style lang="scss" scoped>
      li {
         display: flex;
    		/*padding: 0.12rem 0.14rem 0.12rem 0.14rem;*/
    		img {
    			width: 0.64rem;
    			height: 0.9rem;
    			margin: 0.12rem 0.12rem 0.12rem 0.14rem;
    			
    		}
    		.right {
    			flex: 1;
    			padding: 0.12rem 0.14rem 0.12rem 0;
    			border-bottom: 1px solid #eee;
    			display: flex;
    			justify-content: flex-start;
    			.right_one {
    				width: 2.2rem;
    				height: 100%;	
    				/*position: relative;*/
    				.title {
    					font-size: 0.17rem;
						color: #333;
						font-weight: 700;
						padding-right: 0.05rem;
						margin-bottom: 0.07rem;
						display: flex;
						justify-content: flex-start;
						.title_left {
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
						}
						.title_right {
							width: 0.43rem;
							height: 0.14rem;
							margin-top: 0.05rem;
							transform: translateX(0.08rem);
						}
						
    				}
    				.mm {
    					margin-right: 0.02rem;
    				}
    				.people {
    					margin-right: 0.05rem;
    				}
    				p{
    					font-size: 0.13rem;
                        color: #666;
                        text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
                        .evaluation {
                        	font-weight: 700;
							color: #faaf00;
							font-size: 0.15rem;
							font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;			
                        }
    				}
    				.p_t {
    					margin-top: 0.06rem;
						line-height: 0.15rem;
    				}
    				.p_three {
    					margin-top: 0.06rem;
						line-height: 0.15rem;
						   
    				}
    				.v3d {
    					background: url(../../assets/movie_hot/index.png) no-repeat;
    					background-size: 100% 100%;
    				}
    			}
    			.right_two {
    				flex: 1;
    				display: flex;
    				flex-direction: column;
    				justify-content: center;
    				.btn {
    					width: 0.47rem;
						height: 0.27rem;
						line-height: 0.28rem;
						text-align: center;
						box-sizing: border-box;
						background-color: #f03d37;
						color: #fff;
						border-radius: 0.04rem;
						white-space: nowrap;
						font-size: 0.12rem;	
						&.bg{
							background-color: #3c9fe6;
						}
						&.bgg{
							background-color: #faaf00;
						}
    				}
    			}
     		}   		
    	} 	
	
</style>