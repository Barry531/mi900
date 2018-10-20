<template>
	<div id="reg">
		<goback></goback><br/>

		<ul>
			<li class="username">
				<div class="font">用户名:</div><br/>
				<div><input type="text" v-model="username"></div><br/>
			</li>
			<li class="password">
				<div class="font">密码：</div><br/>
				<div ><input type="password" v-model="password"></div><br/>
			</li>
			<li class = "submit">
				<div><input type="submit" value="登陆" @click="login1"></div>
			</li>


		</ul>	
	</div>
</template>

<script>
import goback from './goback.vue'
import { Toast } from 'mint-ui';
export default{

	beforeMount(){
		this.$store.commit('changeisShow',false);
		this.$store.commit('changeName',"登陆")
	},
	data(){
		return{
			username:"",
			password:""
		}
	},
	components:{
		goback
	},
	methods:{
		login1(){
	      this.$axios.post('/api/login', {
	        username: this.username,
	        password: this.password
	      }).then((res) => {
	        console.log(res.data);
	        if(res.data === 'namekong1'){
	        	// alert("用户名不能为空")
	        	Toast({
				  message: '用户名不能为空',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==="passwordkong1"){
	        	// alert('密码不能为空')
	        	Toast({
				  message: '密码不能为空',
				  position: 'middle',
				  duration: 2000
				});
	        }else if(res.data==='zhucechenggong1'){
	        	// alert('登陆成功')
	        	Toast({
				  message: '登陆成功',
				  iconClass: 'iconfont icon-hudun'
				});
	        	this.$router.push({
		          path: '/footerbar/mine'
		         // location.href = "http://localhost:8080/#/footerbar/mine"
		        });
		        // window.location.href = "http://localhost:8080"
	        }else if(res.data==='upcuowu'){
	        	// alert('用户名或密码错误')
	        	Toast({
				  message: '用户名或密码错误',
				  position: 'middle',
				  duration: 2000
				});
	        }
	        
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
#reg .submit input{ width:100%; height:3rem;border:1px solid #ccc;border-radius:6px;box-sizing:border-box; margin: 20px 0;font-size:1rem;}
#reg .username .font{height:.3rem;margin:.2rem 0;}
#reg .password .font{height:.3rem;margin:.2rem 0;}
</style>