<template>
    <button>
        <h2>
            {{ text }}
        </h2>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String
    }
};
</script>

<style lang="sass" scoped>
    @import '../styles/Button.sass'
</style>