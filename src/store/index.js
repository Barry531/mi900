import Vue from 'vue';
import Vuex from 'vuex';
// import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		isShow:true,
		span:""
	},
	mutations:{
		changeisShow(state,payload){
			// console.log(payload)
			state.isShow = payload

		},
		changeName(state,payload){
			state.span=payload
		}
	}
})

export default store