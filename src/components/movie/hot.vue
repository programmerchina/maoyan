<template>
<app-content :style="{top: '0.88rem', bottom: '0rem'}" @loadmore="loadMore" ref="resh" :canLoadMore="canLoadMore">
	<div class="hot">
		<ul>
			<li-comm v-for="(item, index) in listData" :key='index' :data='item'></li-comm>
		</ul>
	</div>
</app-content>
</template>

<script>
import {getPlayingList, getMorePlayingList} from '../../ser/movieService'
export default {
	data(){
		  return {
			  listData: [],
			  listDataId: [],
			  canLoadMore: true
		}
  },
   methods: {
   	   loadMore() {
   	   	  let Ids = [...this.listDataId];
   	   	  console.log(Ids)
   	   	  
   	   	  Ids = Ids.splice(this.listData.length, 10);
   	   	  console.log(this.listData.length)
   	   	  let movieIds = Ids.join(",");
   	   	  //请求更多热映的电影
   	   	  getMorePlayingList(movieIds).then(value=>{
   	   	  	//拼接listData数组进行重新渲染
   	   	  	this.listData = [...this.listData, ...value]
//			console.log(listData)
            //***************
            //判断是否可以继续加载更多
                if(this.listData.length >= this.listDataId.length){
                    //加载完毕
                    this.canLoadMore = false;
                }else{
                    //还可以继续加载
                    this.canLoadMore = true;
                }
   	   	  	
   	   	  })
   	   	  this.$refs.resh.refresh();
   	   	  console.log(movieIds)
   	   }
   },
   created(){
   	        //请求热映电影的数据及id
			getPlayingList().then(([result, movieIds])=>{
				console.log(result)
				this.listData = [...result]
				this.listDataId = movieIds;
				console.log(this.listDataId)
				this.$center.$emit("ev", false)
	    })
	}
	
}
</script>

<style lang="scss" scoped>
.hot {
	width: 100%;
	height: auto;
    ul {
    	width: 100%;
    	   	
    }
}
	
</style>