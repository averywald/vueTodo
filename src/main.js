import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

// Link state manager to app
// allows for 'store' param in the Vue object
Vue.use(Vuex)

// Vuex state manager instance
export const store = new Vuex.Store({
	// store data model for app
	state: {
		// data goes here
		todos: [],
		// check if in state of adding new item
		isCreating: false
	},
	// used to get state in components
	getters: {
		getCreatingState: state => {
			return state.isCreating
		}
	},
	// used to commit state changes to Vuex
	mutations: {
		// toogle boolean that tracks if a new item is being added
		toggleCreating(state) {
			state.isCreating = !state.isCreating
		}
	}
})

// Vue App root instance
new Vue({
	// link app root component
	render: h => h(App),
	// link Vuex store
	// accessed in child components as 'this.$store'
	store,
	data: {},
	// mount to DOM element <div id="app"></div>
}).$mount('#app')