<template>
  <el-carousel
    type="card"
    >
    <el-carousel-item
      v-for="img in imgs"
      :src='img.url'
      :key="img.id">
      <img src="" alt="">
      {{img.name}}
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
  data: function () {
    return {
      imgs: [
        {id:1,name:'one',url:'../assets/1.jpg'},
        {id:2,name:'two'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
