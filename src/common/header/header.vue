<template>
	<div class="header">
	    <div class="header_left" @click="backAction">
	         <i class="header_i">
	         
	         </i>
	    </div>
		<h1><!--{{data[num]}}--></h1>
	</div>
</template>

<script>
export default {
	name: "header-comm",
//	props: {
//		num: String,
//	},
    data(){
			return {
				data: ["猫眼电影","影院"]
			}
		},
		methods: {
			backAction(){
				this.$router.push({name: "movie"})
			}
		}
	}
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 0.44rem;
	position: absolute;
	top: 0;
	left: 0;
	background: #e54847;
    border-bottom: 1px solid #e54847;
    .header_left {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 0.44rem;
    	height: 0.44rem;
    	padding: 0.11rem;
    	.header_i {
    		display: inline-block;
    		float: left;
    		width: 0.22rem;
    		height: 0.22rem;
    		&::before {
    			content: "";
				display: block;
				position: absolute;
				top: 0.12rem;
				width: 0.16rem;
				height: 0.16rem;
				border-bottom: 0.02rem solid #fff;
				border-left: 0.02rem solid #fff;
				transform: rotate(45deg);
				/*transform: translateY(0.1rem);*/
    		}
    	}
    }
    h1{
    	width: 50%;
    	height: 100%;
    	text-align: center;
    	line-height: 0.44rem;
    	font-size: 18px;
    	font-weight: 400;
    	color: #fff;
    	position: absolute;
    	left: 50%;
    	transform: translateX(-50%);
    }
}		
</style>