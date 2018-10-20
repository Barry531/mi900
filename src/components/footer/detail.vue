	<template>
		<div>
			detail
		</div>
	</template>
	<script>
	import axios from "axios"
	export default{
		data(){
			return {

			}
		},
		mounted(){
			 console.log(this.$route.params.hp);

			 axios.get("/index.php?r=nine/listajax&n_id=58&page=1&cac_id=").then(res=>{
			 		// console.log(res.data.data.data)
			 		console.log(this.$route.params.hp);
			 		
			 })
		}
	}
	</script>
	<style scoped lang="scss">
		
	</style>