<template>
<div class="blog">
  <div class="jiemian">
    <div class="tou"><img src="../assets/touxiang.jpg" alt=""></div>
    <p>杨亮的博客</p>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</div>
</template>

<script>

export default {
  name: 'Blog',
  components: {
  },
  computed:{
    blogs(){ return this.$store.state.blog.all}
  }
}
  
</script>

<style scoped>
  .yemei{
      background-color: #fff;
    }
  .jiemian{
    width: 100%;
    height: 280px;
    background-color: #429FFD;
    position: relative;
  }
    .tou{
    width: 166px;
    height: 166px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top:50px;
    left:160px;
  }
  .tou>img{
    width: 100%;
    height: 100%;
  }
  .jiemian>p{
    font-size: 34px;
    font-weight: bold;
    color: lavenderblush;
    width: 200px;
    text-align: center;
    position: absolute;
    left: 400px;
    top:100px;
  }
  .main{
    background: #fff;
    padding: 60px 0;

  }
  .scrap-list{
    width: 750px;
    margin: 0 auto;
  }
  .scrap{
    padding-left:30px ;
    display: flex;
    align-items:center;

  }
  svg{
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  span{
    line-height: 45px;
    font-size: 32px;
  }
</style>