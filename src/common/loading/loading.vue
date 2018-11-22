<template>
	<div class="loader">
		<span class="loader_img"></span>
		<span>正在加载...</span>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
	.loader {
		text-align: center;
        line-height: 0.4rem;
        font-size: 0.14rem;
        color: #777;
        .loader_img {
        	display: inline-block;
			vertical-align: middle;
			margin-right: 5px;
			width: 20px;
			height: 20px;
			background-image: url(../../assets/zj/index.png);
			background-size: 20px;
			animation: loader 1.2s linear;
			animation-iteration-count: 1;
			animation-iteration-count: infinite;
        }
        @keyframes loader{
        	0%{
                  transform: rotate(0);
              }
          100% {
                  transform: rotate(1turn);
               }
	}
}
</style>