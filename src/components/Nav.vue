<template>
  <div>
    <h2>To Do List</h2>
    <Button
        @click.native="toggleCreating"
        text="+ New Item"
    />
    <input type="text" name="searchBar" id="search">
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'Nav',
    components: {
        Button
    },
    methods: {}
};
</script>

<style lang="sass" scoped>
    @import '../styles/Nav.sass'
</style>