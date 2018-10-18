<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <home></home> -->
    <footerbar></footerbar>
    <search></search>
  </div>
</template>

<script>

// import home from "./components/home/home.vue";
import footerbar from "./components/footer/footerbar.vue";
import search from "./components/footer/index/search.vue";


export default {
	data(){
		return{

		}
	},
	components:{
  		// home,
      footerbar,
      search
  }

}
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>
