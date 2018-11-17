<template>
<app-content :style="{top: '0.88rem', bottom: '0rem'}" @loadmore="loadMore" ref="resh" :canLoadMore="canLoadMore">
	<div class="hot">
		<div class="hot_ul_one">
			<div class="like">
				<p class="like_p">近期最受期待</p>
				<div class="like_div">
					<div class="like_div_div" :style="{width: widthC}">
						<laterlist v-for="(item, index) in expectativeList" :img='item.img' 
						:name='item.nm' :wish="item.wish" :comingTitle="item.comingTitle"/>
					</div>
				</div>
			</div>
			<div class="tpp" v-for="(item, key) in comingList">
				    <p>{{key}}</p>
					<li-comm v-for="(item, index) in item" :key='index' :data='item'>
						
					</li-comm>
			</div>
		</div>
	</div>
</app-content>
</template>

<script>
import laterlist from '../../common/list/laterlist'
import {getComingList, getExpectativeList, getMoreComingList} from '../../ser/movieService'
export default {
	components: {
		laterlist
	},
	data(){
		  return {
			  listDataId: [],
			  comingList: [],
			  expectativeList: [],
			  canLoadMore: true,
			  num: 0
		}
   },
   computed: {
   	    widthC(){
   	    	return this.expectativeList.length * 1 + 'rem'
   	    }
   },
   methods: {
   	   loadMore() {
   	   	  let Ids = [...this.listDataId];
   	   	  Ids = Ids.splice(this.num + 10, 10);
   	   	  this.num += 10;
   	   	  let movieIds = Ids.join(",");
   	   	  //请求更多期待的电影
   	   	  console.log(movieIds)
   	   	  
   	   	  getMoreComingList(movieIds).then(value=>{
   	   	  	//拼接listData数组进行重新渲染
   	   	  	
   	   	  	this.comingList = {...this.comingList, ...value}
//          //***************
//            判断是否可以继续加载更多
//              if(this.num >= this.listDataId.length){
//                  //加载完毕
//                  this.canLoadMore = false;
//              }else{
//                  //还可以继续加载
//                  this.canLoadMore = true;
//              }
   	   	  	
   	   	 })
   	   	  this.$refs.resh.refresh();
   	   	  console.log(movieIds)
   	   }
   },
   created(){

			getComingList().then(([result, movieIds])=>{
				this.comingList = result;
				this.listDataId = movieIds
				console.log(result)
				
			})
			getExpectativeList().then(expectative=>{
				this.expectativeList = expectative
				console.log(expectative)
				
			})
	}
	
}
</script>

<style lang="scss" scoped>
.hot {
	width: 100%;
	height: auto;
	.like {
		padding: 0.12rem 0 0.12rem 0.15rem;
		background-color: #fff;
		margin-bottom: 0.1rem;
		border-bottom: 0.12rem solid #eee;
		.like_p {
			margin: 0 0 0.12rem;
			font-size: 0.14rem;
			color: #333;
		}
		.like_div {
			width: 3.6rem;
			height: 1.61rem;
			overflow-x: auto;
			.like_div_div {
				/*display: flex;
				justify-content: flex-start;*/

			}
		}
	}
    .hot_ul_one {
    	width: 100%;
    	.tpp {
    		padding: 0.08rem 0 0.15rem 0;
			margin: 0;
			font-size: 0.15rem;
			font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
			color: #333;
			p {
				padding-left: 0.15rem;
			}

    	}    	   	
    }
}
	
</style>