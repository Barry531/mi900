	<template>
		<div>
	<ul>
		<router-link to="/searchpop"  tag="li" activeClass="active">搜卷</router-link>
		<router-link to="/searchpop2"  tag="li" activeClass="active">搜全网</router-link>
		<i class="iconfont icon-fanhui" @click="clicksearch"></i>	<input type="text" placeholder="爆款口红">
		<div class="sousuo">搜索</div>

	</ul>
		<router-view></router-view>
		</div>
	</template>



<script type="text/javascript">
	export default{
		data(){
			return{
				
			}
		},
			beforeMount(){
		this.$store.commit('changeisShow',false);
		this.$store.commit('changeName',"登陆")
	},

		methods:{
				clicksearch(){
				return	this.$router.back(-1)
				}
		}
}
</script>




	<style scoped lang="scss">

ul{	height: 90px;
	background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
	text-align: center;

	li{
		margin:5px 10px 5px;
		display: inline-block;
		color: #eee;
		list-style: none;
		height: 40px;
		line-height: 40px;


	}
}
		ul input{
			position: fixed;
			top: 40px;
			left: 40px;
			padding-left: 15px;
			border:0px;
			margin-top: 15px;
			width: 75%;
			height: 25px;
			border-radius: 30px;
		}
		ul .sousuo{
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
		ul i{
			position: fixed;
			top: 60px;
			left: 15px;
			color: #fff;
		}



.active{
	border-bottom: 1px solid #fff;
	color:#fff;
}

</style>


