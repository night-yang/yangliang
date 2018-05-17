<template>
    <header>
      <div class="tou"><img src="../assets/touxiang.jpg" alt=""></div>
      <p>
        欢迎来到我的家园
      </p>
      <span>Stay Hungry Stay Foolish</span>
    </header>
</template>

<script>


export default {
  name: 'Head',
  components: {  
  }
}
</script>

<style scoped>
  header{
    width: 1080px;
    height: 420px;
    background-image: url(../assets/banner.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .tou{
    width: 166px;
    height: 166px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top:90px;
    left:50%;
    margin-left: -83px; 
  }
  .tou>img{
    width: 100%;
    height: 100%;
  }
  header>p{
    font-size: 32px;
    color: #272E4F;
    width: 350px;
    text-align: center;
    position: absolute;
    bottom: 50px;
    left: 50%;
    margin-left: -175px;
  }
  header>span{
    font-size: 20px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -114px;
  }
</style>