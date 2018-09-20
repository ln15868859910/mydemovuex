import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
let selectModel = {
	state: {
		title: 'hello',
		list: []
	},
	mutations: {
		changeTitle(state, payload) {
			state.title = payload.title;
		},
		changeList(state, list) {
			state.list = list;
		}
	},
	actions: {
		getlistAction({ commit, dispatch }) {
			axios
				.get('http://localhost:3003/answer')
				.then((data) => {
					//拿到数据后提交，改变状态
					commit('changeList', data.data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
};

//定义一个容器
let store = new Vuex.Store({
	state: {
		count: 100
	},
	mutations: {
		addIcre(state, payload) {
			state.count += payload.n;
		},
		drec(state, payload) {
			state.count -= payload.de;
		}
	},
	actions: {
		addAction({ commit, dispatch }) {
			setTimeout(() => {
				commit('addIcre', {
					n: 5
				});
				dispatch('textAction', {
					text: '测试'
				});
			}, 1000);
		},
		textAction(context, obj) {}
	},
	getters: {
		filterCount(state) {
			return state.count >= 120 ? 120 : state.count;
		}
	},
	modules: {
		//this.$store.state.selectModel.title
		selectModel
	}
});

export default store;
