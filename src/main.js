import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

// Link state manager to app
// allows for 'store' param in the Vue object
Vue.use(Vuex)

// Vuex state manager instance
const store = new Vuex.Store({
  // store data model for app
  state: {
    // data goes here
    todos: [],
    // check if in state of adding new item
    isCreating: false
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
    },
    getCreatingState: state => {
      return state.isCreating
    }
  },
  mutations: {
    // add an item to Vuex list of todos
    // payload should be Item.vue object
    addItem(state, payload) {
      state.todos.push(payload)
    },
    // remove todo item from Vuex list
    removeItem(state, payload) {
      // remove only item with matching content field
      state.todos.splice(state.todos.indexOf(payload.content), 1)
    },
    // toogle boolean that tracks if a new item is being added
    toggleCreating(state) {
      state.isCreating = !state.isCreating
    }
  },
  actions: {
    toggleCreating(context) {
      context.commit('toggleCreating')
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
  // link from Vue components to the Vuex state mutators
  methods: mapMutations([
    'addItem',
    'removeItem',
    'toggleCreating'
  ]),
  actions: mapActions([
    'toggleCreating'
  ]),
  // pass Vuex getters to Vue app
  computed: mapGetters([
    'todos',
    'doneTodos',
    'doneTodosCount',
    'getTodosById',
    'getCreatingState'
  ])
  // mount to DOM element <div id="app"></div>
}).$mount('#app')