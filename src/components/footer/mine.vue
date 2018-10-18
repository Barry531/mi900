<template>
	<div>
		<header>
			
								
			<ul>
				<router-lik to="/footer/mine/setter" tag="li"><i></i></router-lik>
				<router-link to="/footer/mine" tag="li"><img src="../../../build/user_info.png"/></router-link>
				<router-link to="/footer/mine/login" tag="li">登陆/</router-link>
				<router-link to="/footer/mine/register" tag="li">注册</router-link>

			</ul>

			
		</header>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped lang="scss">
	header{
		height:154px;
		background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);

		ul li img{width:70px;height:70px;}
	}


	
</style>