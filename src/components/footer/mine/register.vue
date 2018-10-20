<template>
	<div id="reg">
		<goback></goback><br/>

		<ul>
			<li class="username">
				<div class="font">用户名:</div><br/>
				<div><input type="text"v-model="username"></div><br/>
			</li>
			<li class="password">
				<div class="font">密码：</div><br/>
				<div ><input type="password" v-model="password"></div><br/>
			</li>
			<li class = "password2">
				<div class="font">确认密码：</div><br/>
				<div><input type="password" v-model="password2"></div><br/>
			</li>
			<li class = "submit">
				<div><input type="submit" value="注册" @click="register"></div><br/>
			</li>
			<li class = "submit2">
				<div><input type="submit" value="您已注册，点击登陆" @click="registerlogin"></div><br/>
			</li>

		</ul>	
	</div>
</template>
<script>
import goback from './goback.vue'
import { Toast } from 'mint-ui';
export default{
	data(){
		return{
			username:'',
			password:'',
			password2:''
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

	      this.$axios.post('/api/register', {
	        username: this.username,
	        password: this.password,
	        password2:this.password2
	      }).then((res) => {
	        console.log(res.data);
	        if(res.data === 'namekong'){
	        	// alert("用户名不能为空")
	        	Toast({
				  message: '用户名不能为空',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==="passwordkong"){
	        	// alert('密码不能为空')
	        	Toast({
				  message: '密码不能为空',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==="passwordunlike"){
	        	// alert('两次密码不一致')
	        	Toast({
				  message: '两次密码不一致',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==='yonghuyizhuce'){
	        	// alert('用户名已存在')
	        	Toast({
				  message: '用户名已存在',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==='zhucechenggong'){
	        	Toast({
				  message: '注册成功',
				  iconClass: 'iconfont icon-hudun'
				});
	        	this.$router.push({
		          path: '/login'
		        });
		        // window.location.href = "http://localhost:8080"
	        }
	        
	      })
    },
    registerlogin(){
    	return this.$router.push({path:'/login'})
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