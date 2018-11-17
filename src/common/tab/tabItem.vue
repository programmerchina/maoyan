<template>
	<div class="tabItem" @click="clickAction" :class="{active: isFlag}">
	     <span :class="icon"></span>
	     <span>{{name}}</span>
	</div>
</template>

<script>
export default {
	name: "tabItem-comm",
	props: {
        name: String,
        icon: String
   },
    data(){
			return {
				isFlag: false
			}
		},
		methods: {
			clickAction(){
				this.isFlag = true;
				let par = this.$parent;
				par.eventAction(this.name);
			}
		}
	}
</script>

<style lang="scss" scoped>
.tabItem {
	flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.tabItem span{
    flex: 1;
}
.tabItem span:first-of-type{
    font-size: 0.22rem;
    margin-top: 0.09rem;
}
.tabItem span:last-of-type{
    font-size: 0.1rem;
}
.tabItem.active{
    color: #f03d37;
}
</style>