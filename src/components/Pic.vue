<template>
  <div class="pic">
    <div class="left">
      <div :key="pic.id" v-for="pic in pics">{{pic.title}}</div>
    </div>
    <div class="right">
      <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
          <div class="grid-item"><img src="../assets/1.beethoven.jpg" alt=""></div>
          <div class="grid-item grid-item--width2"></div>
          <div class="grid-item"></div>
      </div>
    </div>  
  </div>
</template>
<script>
import '../../node_modules/masonry-layout/dist/masonry.pkgd.min.js'
export default {
  name:'Pic',
  data:()=>({
    pics:[
      {
        'id':'1',
        'title':'我的生活'
      },
      {
        'id':'2',
        'title':'旅游'
      },
      {
        'id':'3',
        'title':'爱好'
      }
    ]
  })
}
</script>
<style scoped>
  .pic{
    display: flex;
  }
  .left{
    width: 180px;
    min-height: 600px;
    background-color: lightblue;
  }
  .right{
    flex-grow:1;
  }
  img{
    width: 180px;
  }
  .grid-item{
    width: 180px;
  }
</style>


