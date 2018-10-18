	<template>
		<aside>
			<slot></slot>
		</aside>
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
		}
		aside ul{
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
			}
		}
		aside ul li i.icon1{
		margin-right:10px;
		color:white;
		}
	</style>