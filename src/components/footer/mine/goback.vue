<template>
	
	<div class="bei" >
		<i class="iconfont icon-fanhui fan" @click="fanhui"></i>
		<span>{{$store.state.span}}</span>
	</div>
	
</template>
<script>
export default{
	data(){
		return{
			
		}
	},
	methods:{
		fanhui(){
			return this.$router.back(-1)
		}
	}
	
	
	
}
</script>
<style scoped lang="scss">
.bei{
		height:50px;
		line-height:50px;
		position:relative;
		font-size:20px;
		
		span{
			width:50px;
			position:absolute;
			left:0px;
			right:0px;
			top:0px;
			bottom:0px;
			margin:auto;
		}
	}



</style>