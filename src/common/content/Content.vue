<template>
<div class="content" ref='content'>
   <!--<div class="wrap">-->
     <slot/>
   <!--</div>-->
</div>
</template>

<script>
export default {
    name: 'app-content',
    //发送请求的判断条件
    props: {
        canLoadMore: Boolean,
        mod: String
    },
    methods: {
    	refresh(){
            this.contentScroll.refresh();
        }
    },
    mounted(){
		this.contentScroll = new IScroll(this.$refs.content,{
			
		})
		this.contentScroll.on("beforeScrollStart", ()=>{
			this.refresh()
		})
		this.contentScroll.on("scrollEnd", ()=>{
			
			if(this.contentScroll.y <= this.contentScroll.maxScrollY && this.canLoadMore){
				//执行获取更多的热门数据
			   this.$emit('loadmore')
               
           }
//			if(this.mod == "ciname"){
//			   this.$emit('cinameAc')
//				
//			}
		})
		
	}
    
}
</script>

<style lang="scss" scoped>
.content{
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
}
</style>

