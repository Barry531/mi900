<template>
	<div>
		<header>
			
			<router-link to="/setter" tag="span" class="right shezhi"><i class="iconfont icon-shezhi"></i></router-link><br/>					
			<ul>
				<router-link to="/footerbar/mine" tag="li" class="left"  ><img src="../../../build/user_info.png"/></router-link>
				<router-link to="/login" tag="li" class="left" >登陆/</router-link>
				<router-link to="/register" tag="li" class="left">注册</router-link>

			</ul>
				
		</header>
		<loginlist></loginlist>
		<router-view></router-view>
	</div>
</template>
<script>
import loginlist from './mine/loginlist.vue'
	export default{
		mounted(){
			this.$store.commit('changeisShow',true)
		},
		components:{
			loginlist
		}
		
			
		
		
	}
</script>
<style scoped lang="scss">
	header{
		height:154px;
		background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
		.left{
			float:left
		}
		.right{
			float:right
		}
		.shezhi{
			margin-right:10px;
			margin-top:5px
		}
		ul{
			height:133px;
			width:100%;
			list-style: none;
			line-height:100px;
			li{
				text-align:center;
				font-size:20px;
				color:#fff;
			}
				
				
			img{
				width:70px;height:70px;
				margin:15px 15px;
				margin-bottom:0px;
				border:5px solid #f0eded;
				border-radius:50%;

			}
			
		}
		
		

		 
	}
.loginlist{
	height:100%;
	background:#d9d9d9;
}

	
</style>