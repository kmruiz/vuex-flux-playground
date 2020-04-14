<template>
    <div id="bacon" v-if="hasText">{{loremIpsum}}</div>
</template>

<script>
 import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            loremIpsum: state => state.bacon.text,
            hasText: state => state.bacon.text.length > 0
        }),
    }
}
</script>

<style scoped>
    div {
        margin: auto;
        margin-top: 5em;
        width: 70vw;
        max-width: 70vw;
        min-height: 50vh;
        text-align: justify;
        white-space: pre-wrap;
    }
</style>