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
			<li class = "password2">
				<div class="font">确认密码：</div><br/>
				<div><input type="password" name="password2"></div><br/>
			</li>
			<li class = "submit">
				<div><input type="submit" value="注册" @click="register"></div><br/>
			</li>
			<li class = "submit2">
				<div><input type="submit" value="您已注册，点击登陆" name="submit2"></div><br/>
			</li>

		</ul>	
	</div>
</template>
<script>
import goback from './goback.vue'
export default{
	data(){
		return{

		}
	},
	beforeMount(){
		this.$store.commit('changeisShow',false);
		this.$store.commit('changeName',"注册")

	},
	components:{
		goback
	},
	methods:{
		register(){
	      this.$http.post('/api/register', {
	        username: this.username,
	        password: this.password
	      }).then((res) => {
	        // console.log(res.data);
	        this.$router.push({
	          path: '/login'
	        });
	        // window.location.href = "http://localhost:8080"
	      })
    }
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
#reg .password2 input{ width:100%; height:.3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; padding: 20px 10px;}
#reg .submit input{ width:100%; height:3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; margin: 20px 0;font-size:1rem;}
#reg .submit2 input{ width:100%; height:3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; margin: 0px 0;font-size:1rem;}

// #reg .username .font{height:.3rem;margin:.2rem 0;}
// #reg .password .font{height:.3rem;margin:.2rem 0;}
// #reg .password2 .font{height:.3rem;margin:.2rem 0;}
</style>