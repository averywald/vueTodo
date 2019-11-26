<template>
	<!-- Vue app container -->
	<div id="app">
		<Nav @creating-new-item="toggleCreating"/>
		<Item/>
		<!-- append new items here -->
		<div ref="container">
			<slot/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Nav from './components/Nav.vue'
import Item from './components/Item.vue'
import { mapGetters } from 'vuex'

// root component
export default {
	name: 'App',
	// Vue components comprising app
	components: {
		Nav,
		Item
	},
	methods: {
		toggleCreating() {
			// create new 'Item' component
			var CompClass = Vue.extend(Item)
			var instance = new CompClass()
			instance.$mount()
			this.$refs.container.appendChild(instance.$el)
			// change the vuex state for 'isCreating'
			this.$store.commit('toggleCreating')
		}
	},
	// import Vuex state and getter functions
	computed: mapGetters([ 'getCreatingState' ])
}
</script>

<style lang="sass">
	@import './styles/Palette.sass'
</style>
