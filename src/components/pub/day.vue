<template>
	<div class="day swiper-container">
		<ul class="day_ul swiper-wrapper" :style="{width: wid}">
			<li class="swiper-slide" v-for="item in 7">{{item<=3?date[item-1]:day[num+item-1>6?num:num+item-1]}}{{getdata[1]}}月{{Number(getdata[2])+item-1}}日</li>

		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			len: 7,
			date: ["今天","明天","后天"],
			day: ["周日","周一","周二","周三","周四","周五","周六"],
			num: 0
		}
	},
	computed: {
		wid(){
			return 7*1.25 + "rem"
		},
		getdata(){
   	     	var day = new Date();
   	     	var mytime=day.toLocaleDateString().split('/');
   	     	return mytime
   	    }
	},
	created(){
		let gday = new Date()
		gday = gday.getDay()
		this.num = gday
		console.log(gday)	
	},
	moutend(){
		var mySwiper = new Swiper('.swiper-container', {
			virtual: true,
        })
	}
}
</script>

<style lang="scss" scoped>
.day {
	width: 3.75rem;
	height: 0.45rem;
	position: absolute;
	top: 2.32rem;
	left: 0;
	background: #fff;
	overflow-x: auto;
	overflow-y: hidden;
	border-bottom: 1px solid #eee;
	.day_ul {
		
		
		li {
			display: inline-block;
			float: left;
			width: 1.15rem;
			line-height: 0.43rem;
			margin-left: 0.045rem;
			font-size: 0.14rem;
			text-align: center;
			list-style: none;
			color: #666;
		}
	}
	
}
</style>