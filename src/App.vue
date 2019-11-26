<template>
	<!-- Vue app container -->
	<div id="app">
		<Nav @creating-new-item="toggleCreating"/>
		<h1> {{ getCreatingState }} </h1>
		<Item content="Complete To-Do App"/>
	</div>
</template>

<script>
import Nav from './components/Nav.vue'
import Item from './components/Item.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'App',
	// Vue components comprising app
	components: {
		Nav,
		Item
	},
	methods: {
		toggleCreating() {
			this.$store.commit('toggleCreating')
		}
	},
	// import Vuex state and getter functions
	computed: mapGetters([ 'getCreatingState' ])
}
</script>

<style lang="sass">
	@import './styles/App.sass'
</style>
