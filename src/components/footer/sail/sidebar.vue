	<template>
		<transition name="bonuce">

		<aside>
			<slot></slot>
		</aside>
		</transition>
	</template>
	<script>
	export default{

	}
	</script>
	<style lang="scss">
		aside{
			z-index: 10;
			width: 140px;
			height: 300px;
			border-radius:10px;
			background:black;
			opacity:.8;
			right: 0;
			top:60px;
			margin-right:5px;
			position:absolute;

			ul{
				width:100%;
				height:100%;
				list-style: none;
				overflow: hidden;
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
		

		.bonuce-enter-active{
			animation:bonuce-in .5s
		}
		.bonuce-enter-active{
			animation:bonuce-in .5s reverse
		}
		@keyframes bonuce-in{
			0%{
				transform:translateX(0)
			}
			100%{
				transform:translateX(100%)
			}
		}
	</style>