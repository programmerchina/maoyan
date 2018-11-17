<template>
	<div class="day">
		<ul class="day_ul" :style="{width: wid}">
			<li v-for="(item, index) in len">今天{{getdata[1]}}月{{getdata[2]}}日</li>

		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			len: ['1','2','3','4','6','7','8']
		}
	},
	computed: {
		wid(){
			return this.len.length*1.15 + "rem"
		},
		getdata(){
   	     	var day = new Date();
   	     	var mytime=day.toLocaleDateString().split('/');
   	     	return mytime
   	    }
	},
	created(){
		console.log(this.getdata)
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