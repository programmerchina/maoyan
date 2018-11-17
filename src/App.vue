<template>
  <div id="app">
  	  <router-view />
  	  
  	  
  	  <tab-comm v-model="selectIndex">
  	  	  <tabItem-comm v-for="(item, index) in dataList" :key="index"
        :name="item.name" :icon="item.icon"></tabItem-comm>
  	  </tab-comm>
  </div>
</template>
<script>
export default {
	data(){
		return {
			dataList: [
			  {name: '电影', icon: 'iconfont icon-dianying', path: '/movie'},
        {name: '影院', icon: 'iconfont icon-yingyuana', path: '/cinema'},
        {name: '我的', icon: 'iconfont icon-wode', path: '/mine'}
			],
			selectIndex: 0
	 } 
},
	watch: {
			  selectIndex(newVal){
	      let path = this.dataList[newVal].path;
	      this.$router.push(path);
    }
	}
}
	
</script>

<style lang="scss">

</style>
