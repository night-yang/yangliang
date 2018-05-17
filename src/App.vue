<template>
  <div id="app">
    <Top />
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/Home'
import Top from './components/Top'
export default {
  name: 'app',
  components: {
    Home,
    Top
  },
  created: function () {
    this.$store.dispatch({ type: 'loadBlog' })
    this.$store.dispatch({ type: 'loadcv' })
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 1080px;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  li{
    list-style: none;
  }
</style>
