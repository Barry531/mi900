	<template>
		<div>
			<header>
			<div class="left">
				<i class="iconfont  icon-fanhui" @click="handleclick()"></i>
			</div>
				<img src="http://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201810101200">
				<div class="right">
					<i class="iconfont icon-icon" @click="isShow=!isShow"></i>
				</div>
			</header><!-- /header -->
			<sidebar v-show="isShow">
			<ul>
				<li><i class="iconfont icon1 icon-shouye"></i><a href="/home" >首页</a></li>
				<li><i class="iconfont icon1 icon-xingtaiduICON_sousuo--"></i><a href="#2" >搜索</a></li>
				<li><i class="iconfont icon1 icon-kefu"></i><a href="#3" >客服</a></li>
				<li><i class="iconfont icon1 icon-fankui"></i><a href="#4" >反馈</a></li>
				<li><i class="iconfont icon1 icon-wode"></i><a href="/#/footerbar/mine" >我的</a></li>
			</ul>
			</sidebar>
		</div>
	</template>
	<script>
	import sidebar from "./sail/sidebar.vue"
	export default{
		data(){
			return {
				isShow:false
			}
		},
	methods:{
		handleclick(){
			location.href="/home"
			}

		},

	components:{
		sidebar
	}	

	}
	</script>
	<style>
	header{
		height:50px;
		background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
	}
	header img{
		position: absolute;
		top:13px;
		left:45%;
	}
	header div.left{
		float: left;
		overflow: hidden;
	}
	header div.left i{
		font-size:25px;
		color:white;
		position:absolute;
		left:0;
		top:10px;
		margin-left:10px;
	}
	header div.right{
		float:right;
	}
	header div.right i{
		font-size:30px;
		color:white;
		position: absolute;
		right:0;
		top:10px;
		margin-right:10px;
	}

	</style>