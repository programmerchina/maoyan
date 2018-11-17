<template>
	<div @click="evAction">
		<div class="loc_city">			
             {{value}}
	    </div>
	</div>
</template>

<script>
    export default {
    	props: {
    		value: String
    	},
		methods: {
			evAction(){
				this.$router.push({
					name: "movie"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
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
</style>