<template>
  <div id="app">
    <GetPriceListData/>
  </div>
</template>

<script>
import GetPriceListData from './Views/GetPriceListView'

export default {
  name: 'App',
  components: {
    GetPriceListData
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
