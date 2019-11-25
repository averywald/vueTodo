<template>
  <div>
    <h2>To Do List</h2>
    <!-- implement click to add new item -->
    <Button
        v-on:click.native="newItem"
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
    data() {
        return {
            isCreating: false
        }
    },
    methods: {
        newItem() {
            this.isCreating = true
            this.$emit('new-item', `isCreating: ${this.isCreating}`)
        }
    }
};
</script>

<style lang="sass" scoped>
    @import '../styles/Nav.sass'
</style>