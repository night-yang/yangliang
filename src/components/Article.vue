<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <p>
      {{ blog.body }}
    </p>
    {{path}}
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ['blogs'],
  computed: {
    blogId() {
      return this.$route.params.id
    },
    path(){
      return this.$route.path
    },
    blog() {
      return this.blogs.find(t => String(t.id) === this.blogId)
    }
  },
  
}
</script>