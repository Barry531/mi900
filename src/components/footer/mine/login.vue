<template>
	<div id="reg">
		<goback></goback><br/>

		<ul>
			<li class="username">
				<div class="font">用户名:</div><br/>
				<div><input type="text" name="username"></div><br/>
			</li>
			<li class="password">
				<div class="font">密码：</div><br/>
				<div ><input type="password" name="password"></div><br/>
			</li>
			<li class = "submit">
				<div><input type="submit" value="登陆"></div>
			</li>


		</ul>	
	</div>
</template>
<script>
import goback from './goback.vue'
export default{

	beforeMount(){
		this.$store.commit('changeisShow',false);
		this.$store.commit('changeName',"登陆")
	},
	components:{
		goback
	}
	
	
}
</script>
<style scoped lang="scss">
*{ margin : 0; padding : 0; }
ul,li{ list-style: none;}
html{ width:100%; height:100%;font-size:26.6666667vw;}
body{width:100%; height:100%;font-size:16px;}
#reg{width:90%; height:100%;padding-left:5%;padding-right:5%;}
#reg .username input{ width:100%; height:.3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; padding: 20px 20px;}
#reg .password input{ width:100%; height:.3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; padding: 20px 20px;}
#reg .submit input{ width:100%; height:3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; margin: 20px 0;font-size:1rem;}
#reg .username .font{height:.3rem;margin:.2rem 0;}
#reg .password .font{height:.3rem;margin:.2rem 0;}
</style>