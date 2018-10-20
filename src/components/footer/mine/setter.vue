<template>
	<div id="goback">
		<div id="reg">
			<goback></goback>
			
		</div>
		<setterchildren></setterchildren>
	</div>
</template>
<script>
import goback from './goback.vue'
import setterchildren from './setterchildren'
export default{

	beforeMount(){
		this.$store.commit('changeisShow',false);
		this.$store.commit('changeName',"设置")
	},
	components:{
		goback,
		setterchildren
	}
	
	
}
</script>
<style scoped lang="scss">
*{ margin : 0; padding : 0; }
ul,li{ list-style: none;}
html{ width:100%; height:100%;font-size:26.6666667vw;}
body{width:100%; height:100%;font-size:16px;}
#goback{
	height:50px;
	background:linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
#reg{width:90%; height:100%;padding-left:5%;padding-right:5%;}

</style>