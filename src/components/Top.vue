<template>
  <div class="top">
    <router-link to="/">Home</router-link>
    <span> > 
       <router-link :to="rootPath">{{pathName}}</router-link>
    </span>

  </div>
</template>

<script>
import { getPathName } from '../constants/RouteConstants'
import { getRootPath } from '../utils'
export default{
  name:'Top',
  computed:{
    path(){
      return this.$route.path
    },
    rootPath() {
      return getRootPath(this.path)
    },
    pathName() {
      return getPathName(this.rootPath)
    }
  }
}
</script>

<style scoped>
  .top{
    background-color: #fff;
  }
</style>