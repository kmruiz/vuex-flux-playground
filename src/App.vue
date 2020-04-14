<template>
  <div id="app">
    <Refresh />
    <LoremIpsum />
  </div>
</template>

<script>
import Refresh from './components/Refresh.vue'
import LoremIpsum from './components/LoremIpsum.vue'

export default {
  name: 'App',
  components: {
    Refresh,
    LoremIpsum
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
