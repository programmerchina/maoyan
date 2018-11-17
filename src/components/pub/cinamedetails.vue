<template>
	<div class="top">
	    <header-comm></header-comm>	
	    <pic></pic>
	    <day></day>
	    <div class="body">
	        <daoh style="top: 0rem"></daoh>
	        <app-content :style="{top: '1.29rem', bottom: '0rem'}" @cinameAc="loadMore" ref="resh" mod="ciname">
		         <div>   	
			   	     <list-ot v-for="item in 10"></list-ot>
			   	 </div>	
	        </app-content>
	    </div>
	</div>
</template>

<script>
	import pic from './moviePicture'
	import day from './day'
	import daoh from '../cinema/daohan'
	import {filterCiname} from '../../ser/appService'
	export default {
		name: 'movie-detail',
		components: {
			pic,
			day,
			daoh
		},
		created(){
			filterCiname().then(value=>{
				console.log(value)
			})
		}
	}
</script>

<style lang="scss" scoped="">
	.top {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 7;
		background: #fff;
		.body {
			position: absolute;
			left: 0;
			top: 2.77rem;
			width: 100%;
			height: 100px;
			background: #000000;
		}
	}	
</style>