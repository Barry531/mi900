	<template>
		<section>
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
				<li><i class="iconfont icon1 icon-shouye"></i><a href="/footbar/index" >首页</a></li>
				<li><i class="iconfont icon1 icon-xingtaiduICON_sousuo--"></i><a href="#2" >搜索</a></li>
				<li><i class="iconfont icon1 icon-kefu"></i><a href="#3" >客服</a></li>
				<li><i class="iconfont icon1 icon-fankui"></i><a href="#4" >反馈</a></li>
				<li><i class="iconfont icon1 icon-wode"></i><a href="/footerbar/mine" >我的</a></li>
			</ul>

			</sidebar>
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
  </div>
  		<main>
  			<ul
				  v-infinite-scroll="loadMore"
				  infinite-scroll-disabled="loading"
				  infinite-scroll-distance="10">
  				<li v-for="data in datalist"  @click="toDetail(data.id)">
  					<img :src="data.pic" > <br><br>
  					<h4>{{data.d_title}}</h4><br>
  					<div>淘宝价：￥{{data.yuanjia}}  已售：{{data.xiaoliang}}</div>
  				</li>
  			</ul>
  		</main>
		
		</section>
	</template>
	<script>
	import Swiper from "swiper"
	import "swiper/dist/css/swiper.min.css"
	import sidebar from "./sail/sidebar.vue"
	import axios from "axios"
	import router from "../../router"
	export default{
		data(){
			return {
				isShow:false,
				looplist:[],
				datalist:[],
				loading:false, //控制无限滚动是否禁用
				surrent:1,
				total:0
			}
		},
	methods:{
		handleclick(){
			location.href="/#/footerbar/index"
			},
			toDetail(id){
				console.log(id);
				router.push(`/detail/${id}`)
			},
			loadMore(){
				console.log("到底了");
				this.current++;
				axios.get(`/index.php?r=nine/listajax&n_id=58&${this.current}&cac_id=`).then(res=>{
			 		console.log(res.data);
			 		this.datalist=[...this.datalist,...res.data.data.data];
		})
			}
		},
		// mounted(){
			
		// 	 axios.get("/index.php?r=nine/listajax&n_id=58&page=1&cac_id=").then(res=>{
		// 	 		console.log(res.data);
		// 	 		this.datalist=data.data.data;
		// })
		// },
		mounted(){
			var swiper = new Swiper('.swiper-container', {
			      slidesPerView: 3,
			      spaceBetween: 30,
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true,}
			    });
		// 	axios.get("/v4/api/film/now-playing?__t=1539906966045&page=1&count=5").then(res=>{
		// 	 		console.log(res.data);
		// 	 		this.datalist=res.data.data.films;
		// })
		// },
		
		axios.get("/index.php?r=nine/listajax&n_id=58&page=1&cac_id=").then(res=>{
			 		console.log(res.data);
			 		this.datalist=res.data.data.data;
		})
		},


	components:{
		sidebar
	}
	
	}
	</script>
	<style lang="scss">
	section{
		width:100%;
		height:100%;
		overflow:hidden;
	}
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
		width:100px;
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
		width:100px;
	}
	header div.right i{
		font-size:30px;
		color:white;
		position: absolute;
		right:0;
		top:10px;
		margin-right:10px;
	}
	div.swiper-container{
		width:100% !important;
		overflow: hidden;
	}
	div.swiper-wrapper{
		width:100% !important;
	}
	div.swiper-slide{
		width:100%;
		height: 100px;
		border:1px solid #000;
		float:left;
		// margin-left:5px;
		margin-top:5px;	
		margin-right: 27px !important;
	}


	main{
		width:100%;
		height:100%;
		overflow:hidden;
		ul{ overflow:hidden;
			list-style:none;
			li{ 
				width:45%;
				float:left;
			 	padding:5px;
			 	font-size:12px;
			 	height:250px;
					img{
					float:left;
					width:100%;
					}
			}
		}
	}
	</style>