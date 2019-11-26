<template>
  <div>
    <input 
        v-if="this.editing"
        v-model="content" 
        :placeholder="placeHolderValue"
    >
    <h2 v-else> {{ this.content }} </h2>
    <div class="itemConfig">
        <Button 
            @click.native="edit"
            text="Edit"
        ></Button>
        <Button
            id="delete"
            @click.native="remove"
            text="Delete"
        />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import { isNullOrUndefined } from 'util'
export default {
    name: 'Item',
    components: {
        Button
    },
    props: {
        // 'to-do' itself
        content: String,
    },
    data() {
        return {
            // set in editing mode
            editing: false,
            // check if item has content
            empty: isNullOrUndefined(this.content),
            // get placeholder content for input field
            placeHolderValue: this.content,
            // if the item is done
            done: 'uncompleted'
        }
    },
    methods: {
        edit() {
            // switch edting state with each click
            this.editing = !this.editing
            if (this.editing) {
                // emit click event and state
                this.$emit('click-edit', this.content, `editing: ${this.editing}`)
            } else {
                // emit completed click event and state
                this.$emit('click-edit-complete', this.content, `editing: ${this.editing}`)
            }
        },
        remove() {
            // emit click event and state of item content
            this.$emit('click-remove', `content null: ${this.empty}`)
        },
        completed() {
            this.$emit('completed-item', this.done, this.content)
        }
    }
};
</script>

<style lang="sass" scoped>
    @import '../styles/Item.sass'    
</style>