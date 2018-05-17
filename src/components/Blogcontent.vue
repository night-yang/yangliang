<template>
  <div class="blog-content">
    <div class="aside-list">
      
      <div :key="blog.id" v-for="blog in blogs" >
        <router-link :to="`${blog.id}`">{{blog.title}}</router-link>
      </div>
    </div>
    <div class="article">
      <Article :blogs="blogs"/>
    </div>
  </div>
</template>

<script>
import Article from './Article'
export default {
  name: 'BlogContent',
  components: {
    Article
  },
  computed:{
    blogs(){ return this.$store.state.blog.all},
    blogId() {
        return this.$route.params.id
      },
    blog() {return this.$store.state.blog.all.find(p => p.id === this.blogId)},
  },
}
</script>

<style scoped>
.blog-content{
  display: flex;
  justify-content:space-around;
}
  .aside-list{
    width: 280px;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    min-height: 500px;
  }
  .article{
    width: 650px;
  }
</style>