<template>
	<div class="addr">
		
		<one :word="dw">
			<two value="s"></two>
		</one>
		
		<one :word="zj">
			<two></two>
		</one>
				
		<one :word="hoc">
			<two v-for="(item, index) in hotcity" :value="item"></two>		
       </one>
	    <one v-for="(item, index) in valuelist.data" :word="item"> 
	    	<three v-for="(item, ind) in valuelist.data[index].value" :city="item"></three>
	    </one>
	</div>
</template>

<script>
import one from './componentOne'
import two from './componentTwo'
import three from './componentThree'
import {getCityListData} from '../../ser/appService'
export default {
	data(){
		return {
			valuelist: {},
			hotcity: ['上海','北京','广州','深圳','武汉','天津','西安','南京','杭州','成都','重庆'],
			dw: {key:'定位城市'},
			hoc: {key:"热门城市"},
			zj: {key:"最近访问城市"},
			
		}
	},
	components: {
		one,
		two,
		three
	},
	created(){
	    getCityListData().then(value=>{
	    	this.valuelist = value
	    	console.log(value)
	    })
	}
}
	
</script>

<style lang="scss" scoped>
.addr {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	background: #eee;
	.top {
		width: 3.75rem;
		height: 0.3rem;
		font-size: 0.14rem;
        color: #333;
        padding-left: 0.15rem;
        line-height: 0.3rem;
	}
	.dw {
		width: 3.75rem;
		/*height: 0.56rem;*/
		background-color: #f5f5f5;
        padding-bottom: 0.08rem;
        padding-right: 0.3rem;
        overflow: hidden;
        .loc_city {
        	font-size: 0.14rem;
            color: #333;
        	width: auto;
		    padding: 0 0.2rem;
		    float: left;
			background: #fff;
			height: 0.33rem;
			margin-top: 0.15rem;
			margin-left: 4%;
			border: 1px solid #e6e6e6;
			border-radius: 0.03rem;
			line-height: 0.33rem;
			text-align: center;
			box-sizing: border-box;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
        }
	}
}	
	
</style>