	<template>
		<!-- <transition name="bonuce"> -->
		<aside>
			<slot></slot>
		</aside>
		<!-- </transition> -->
	</template>
	<script>
	export default{

	}
	</script>
	<style scoped lang="scss">
		aside{
			width: 140px;
			height: 300px;
			border-radius:10px;
			background:black;
			opacity:.8;
			position:absolute;
			right: 0;
			top:60px;
			margin-right:5px;
			ul{
				width:100%;
				height:100%;
				list-style: none;
				li{
					width:100%;
					height:60px;
					line-height:60px;
					text-align:center;
					// padding-right:120px;
					a{
					text-decoration: none;
					color:white;
					}
					i.icon1{
					margin-right:10px;
					color:white;
					}
				}
			}
		}
		
		// .bonuce-enter-active{
		// 	animation:bonuce-in .5s
		// }
		// .bonuce-enter-active{
		// 	animation:bonuce-in .5s reverse
		// }
		// @keyframes bonuce-in{
		// 	0%{
		// 		transform:translateX(0)
		// 	}
		// 	100%{
		// 		transform:translateX(100%)
		// 	}
		// }
	</style>