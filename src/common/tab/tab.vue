<template>
	<div class="tab">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "tab-comm",
	props: {
		value: Number
	},
    data(){
			return {
				
			}
		},
		methods: {
			eventAction(value){
		    let tabItems = this.$slots.default;
          
            let tabComs = tabItems.map(item=>item.componentInstance);

            tabComs.map((item, index)=>{
                if(item.name !== value){
                    item.isFlag = false;
                }else{
                    this.$emit('input', index);
                }
             })
			}
		},
		mounted(){
        if(this.value < this.$slots.default.length){
            this.$slots.default[this.value].componentInstance.isFlag = true;
        }
        

        }
	}
</script>

<style lang="scss" scoped>
.tab {
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 0.49rem;
	position: absolute;
	left: 0;
	bottom: 0;
	background: #fff;
    border-top: .5px solid #d8d8d8;
}

</style>