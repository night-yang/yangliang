<template>
<footer>
  <p>杨亮的自由网络</p>
</footer>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style scoped>
  footer{
    background:#61C0BF;
    width: 100%;
    height: 90px;
    position: relative;
  }
  p{
    width: 200px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 30px;
  }
</style>