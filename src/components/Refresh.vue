<template>
    <div>
        <button @click="refresh" :disabled="isLoading">Refresh</button>
        <p v-if="failed">Could not refresh lorem ipsum because of: {{error}}</p>
    </div>
</template>

<script>
 import { mapState, mapActions } from 'vuex'
 import { NAME as REFRESH } from '../commands/refresh'


 export default {
     computed: mapState({
         isLoading: state => state.bacon.isLoading,
         failed: state => state.bacon.error.length > 0,
         error: state => state.bacon.error
     }),
     methods: mapActions({
         refresh: REFRESH
     })
 }

</script>

<style scoped>
    button {
        background-color: green;
        color: white;
        border: 0;
        padding: 1em;
        box-shadow: 4px 2px darkgreen;
        min-width: 10em;
        text-align: center;
    }

    button:disabled {
        background-color: gray;
        cursor: progress;
    }

    p {
        color: red;
        text-decoration: underline;
    }
</style>