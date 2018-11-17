<template>
	<div class="img">
		<img :src="img" alt="" />
		<h5>{{name}}</h5>
		<p>{{comingTitle}}</p>
	</div>
</template>
<script>
	export default {
		props: {
			img: String,
			name: String,
			wish: Number,
			comingTitle: String
		}
	}
</script>

<style lang="scss" scoped>
	.img {
		/*display: inline-block;*/
		float: left;
		width: 0.85rem;
		overflow: hidden;
		margin-right: 0.15rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		img {
			width: 100%;
			height: 1.15rem;
		}
		h5 {
			margin: 0.05rem 0 0.03rem;
			font-size: 0.13rem;
			color: #222;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		p {
			margin: 0;
			font-size: 0.12rem;
			color: #999;
			white-space: nowrap;
		}
	}
</style>