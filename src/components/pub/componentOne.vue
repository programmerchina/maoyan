<template>
	<div>
		<div class="top">	
               {{word.key}}
		</div>
		<div class="dw">
			<slot></slot>
	    </div>
	</div>
</template>

<script>
	export default {
		props: {
			word: Object
		}
		
	}
	
</script>

<style lang="scss" scoped>
.top {
		width: 3.75rem;
		height: 0.3rem;
		font-size: 0.14rem;
        color: #333;
        padding-left: 0.15rem;
        line-height: 0.3rem;
        background: #eee;
	}
.dw {
		width: 3.75rem;
		/*height: 0.56rem;*/
		background-color: #f5f5f5;
        padding-bottom: 0.08rem;
        padding-right: 0.3rem;
        overflow: hidden;
 }
	
</style>