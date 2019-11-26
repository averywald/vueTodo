<template>
  <div>
    <Button
        @click.native="emitToggle"
        text="+ New Item"
    />
    <input 
        type="text" 
        name="searchBar" 
        id="search"
        placeholder="search"
    >
  </div>
</template>

<script>
import Button from './Button.vue'
 
export default {
    name: 'Nav',
    components: {
        Button
    },
    methods: {
        emitToggle() {
            this.$emit('creating-new-item')
        }
    }
};
</script>

<style lang="sass" scoped>
    @import '../styles/Nav.sass'
    @import '../styles/Input.sass'
</style>