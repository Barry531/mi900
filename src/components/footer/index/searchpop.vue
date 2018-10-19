
	<template>
		<div class="wai">
			<div class="nei"><span class="soujuan">搜卷</span><span>搜全网</span></div> 
		<i class="iconfont icon-fanhui"></i>	<input type="text" placeholder="爆款口红">
		<div class="sousuo">搜索</div>
		</div>
	</template>
	<script>
	export default{
		

	}
	</script>
	<style scoped lang="scss">

		.wai{
		height: 90px;
		background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
		text-align: center;		
		}
		.wai .nei{
			padding-top: 20px;
		}
		.wai span{

			color: #eee;
		}
		.wai .soujuan{
			color: #fff;
			border-bottom: 1px solid #fff;
			margin-right: 20px;
			padding-bottom: 5px;
		}0
		.wai i{
			position: fixed;
			top: 60px;
			left: 15px;
			color: #fff;
		}
		.wai input{
			padding-left: 15px;
			border:0px;
			margin-top: 15px;
			width: 75%;
			height: 25px;
			border-radius: 30px;
		}
		.wai .sousuo{
			text-align: center;
			line-height:28px; 
			width: 60px;
			height: 28px;
			background: #f80;
			position: fixed;
			right: 7%;
			border-radius: 30px;
			top: 55px;
			color: #fff;
			font-size: 14px;
		}
		
	</style>	
