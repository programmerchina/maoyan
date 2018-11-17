<template>
	<div class="ciname_all">
	   	     <div class="top">
	   	     	  <div>
	   	     	  	 <span>全城</span>
	   	     	  </div>
	   	     	  <div>
	   	     	  	 <span>品牌</span>
	   	     	  	
	   	     	  </div>
	   	     	  <div>
	   	     	  	 <span>特色</span>
	   	     	  </div>
	   	     </div>
	   </div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
.ciname_all {
        	width: 100%; 
        	position: absolute;
        	top: 0.89rem;
        	left: 0;
        	z-index: 2;
        	border-top: 1px solid #eee;
        	border-bottom: 1px solid #eee;
        	.top {
        		width: 3.75rem;
        		height: 0.4rem;
        		background: #fff;
        		display: flex;
        		justify-content: flex-start;
        		text-align: center;
        		div {
        			flex: 1;
        			display: flex;
        			align-items: center;
        			justify-content: center;
        			span {
        				width: 100%;
        				height: 0.20rem;
                        font-size: 0.13rem;
                        border-right: 1px solid #eee;
                        &::after {
                        	content: '';
                        	display: inline-block;
                        	width: 0;
							height: 0;
							margin-left: 0.04rem;
							border: 0.04rem solid transparent;
							border-top-color: #b0b0b0;
                        }
        			}
        		}
        	}
    }	
	
</style>