<template>
	<div @click="evAction">
		<div class="list">			
              {{city.nm}}
	    </div>
	</div>
</template>

<script>
import {mapMutations} from 'vuex' 
    export default {
    	props: {
    		city: Object
    	},
    	methods: {
    		evAction(){
    			this.$router.push({
    				name: "movie"
    			})
    			this.changeCity(this.city.nm)
    			this.changeCityId(this.city.id)
    			console.log(this.city.nm)
    			console.log(this.city)
    		},
    		...mapMutations({
    			changeCity: 'city/mutationsCityAction',	
    			changeCityId: 'city/mutationsCityIdAction'	
    		})	
    	},
//  	created(){
//  		this.$center.$on('ev', (name)=>{
//  			this.na = name
//  		})
//  	}
    	
	}
</script>

<style lang="scss" scoped>
.list {
       width: 3.3rem;
       height: 0.44rem;
       font-size: 0.14rem;
       color: #333;
       line-height: 0.44rem;   
	   margin-left: 0.15rem;
	   border-bottom: 1px solid #c8c7cc;
}	
</style>