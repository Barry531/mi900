	<template>
		<div>
			<ul>
				<router-link to="/searchfilm"  tag="li" >
					<input type="text" value="输入您需要的商品名称" >
					<i class="iconfont icon-xingtaiduICON_sousuo--"></i>
				</router-link>
				<router-link to="/download"  tag="li"><span class="iconfont icon-64xiazaiapp"></span></router-link>
					<!-- <router-view></router-view> -->
			</ul>
			
			
			
		</div>
	</template>
	<script>

	export default{
		data(){

			return {
				
			}
		},
			methods:{


		}

	}
	</script>
	<style scoped lang="scss">
	div{
		height:50px;
		background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
		text-align: center;
	}
	div input{
		width: 75%;
		height: 30px;
		margin-top: 10px;
		border-radius: 30px;
		color: #ccc;
		float: left;
		margin-left: 10px;
		padding-left: 37px;
		border:1px solid red;
	}
	div i{
		position: fixed;
		top: 18px;
		left: 25px;
		color: #ccc;
	}
	div span{
		position: fixed;
		top:8px;
		right: 7px;
		font-size: 40px;
		color: #fff;
	}
	div{
		ul{
			list-style: none;
			li{

			}
		}
	}
	

		
	</style>