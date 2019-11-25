import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { mapGetters } from 'vuex'

// Link state manager to app
// allows for 'store' param in the Vue object
Vue.use(Vuex)

// Vuex state manager instance
const store = new Vuex.Store({
  // store data model for app
  state: {
    // data goes here
    todos: [
      { id: 1, item: 'make a million bucks', done: false },
      { id: 2, item: 'tie shoes', done: true }
    ]
  },
  getters: {
    todos: state => {
      return state.todos
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.Length
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id == id)
    }
  }
})

// mutate state by: store.commit('methodName');

// Vue App root instance
new Vue({
  // link app root component
  render: h => h(App),
  // link Vuex store
  // accessed in child components as 'this.$store'
  store,
  data: {},
  // pass Vuex getters to Vue app
  computed: mapGetters([
    'doneTodos', 'doneTodosCount', 'getTodosById'
  ])
  // mount to DOM element <div id="app"></div>
}).$mount('#app')