<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <home></home>
    <footerbar></footerbar>
  </div>
</template>

<script>

import home from "./components/home/home.vue";
import footerbar from "./components/footer/footerbar.vue";


export default {
	data(){
		return{

		}
	},
	components:{
  		home,
      footerbar
  }

}
</script>

<style>

</style>
