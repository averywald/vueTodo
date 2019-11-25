<template>
  <!-- Vue app container -->
  <div id="app">
    <!-- components -->
    <Nav/>
    <Item content="Complete To-Do App"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Item from './components/Item.vue'
export default {
  name: 'app',
  components: {
    Nav,
    Item
  },
  props: {
    items: Array
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
