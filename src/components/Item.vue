<template>
  <div>
    <input
        ref="input"
        type="text" 
        class="itemInput"
        v-if="this.editing"
        v-model="content"
        @keypress.enter="edit(true)"
    >
    <h2 v-else> {{ this.content }} </h2>
    <div class="itemConfig">
        <Button 
            @click.native="edit(false)"
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
            editing: true,
            // if the item is done
            done: false
        }
    },
    methods: {
        edit(key) {
            // if triggered by 'enter' keypress
            if (key && this.editing) {
                // end editing state
                this.editing = false
                // emit completed event and state
                this.$emit('edit-complete', this.content, `editing: ${this.editing}`)
            } else {
                // switch edting state with each click
                this.editing = !this.editing

                if (this.editing) {
                    // emit click event and state
                    this.$emit('click-edit', this.content, `editing: ${this.editing}`)
                } else {
                    // emit completed click event and state
                    this.$emit('edit-complete', this.content, `editing: ${this.editing}`)
                }
            }
        },
        remove() {
            // emit click event and state of item content
            this.$emit('click-remove', `content null: ${this.empty}`)
        }
    }
};
</script>

<style lang="sass" scoped>
    @import '../styles/Item.sass'
    @import '../styles/Input.sass'
</style>