<template>
	<footer>
		<router-view></router-view>
		<ul v-show="$store.state.isShow">
			<router-link to="/footerbar/index" tag="li"><img src="../../../build/shouye.png"><br/>首页</router-link>
			<router-link to="/footerbar/sail" tag="li"><img src="../../../build/99.png"><br/>9.9包邮<span>新</span></router-link>
			<router-link to="/footerbar/type" tag="li"><img src="../../../build/lei.png"><br/>分类</router-link>
			<router-link to="/footerbar/collect" tag="li"><img src="../../../build/shoucang.png"><br/>收藏</router-link>
			<router-link to="/footerbar/mine" tag="li"><img src="../../../build/wo.png"><br/>我的</router-link>
			
		</ul>
	</footer>
</template>

<script>

	export default{

		
	}


</script>

<style scoped lang="scss">
	*{
		margin:0;
		padding:0;
	}
	footer{
		width:100%;
		height:100%;
	}
	ul{ 
		height:50px;
		// line-height:50px;
		list-style:none;
		text-align: center;
		width:100%;
			position: fixed;
			bottom:0;
			left:0;

		li{
			float:left;
			width:20%;
			font-size:12px;
			display: block;
			text-decoration: none;
			color:#666666;
			text-align: center;
		}
	}
	img{
		width:24px;
		height:24px;
	}
	span{
		position:absolute;
		top:-5px;
		left:33%;
		color:red;
	}
</style>

