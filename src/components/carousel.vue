<template>
  <el-carousel
    class="carousel-block"
    type="card"
    height="280px"
    >
    <el-carousel-item
      v-for="img in imgs"
      :key="img.id">
      <img class="carousel-img" :src="img.src" :alt="img.alt">
      {{img.name}}
    </el-carousel-item>
  </el-carousel>
</template>


<script>
const urls = [
  require('../assets/1.jpg'),
  require('../assets/2.jpg'),
  require('../assets/3.jpg'),
  require('../assets/4.jpg'),
  require('../assets/5.jpg'),
  require('../assets/6.jpg')
  ];

export default {
  data: function () {
    return {
      imgs: [
        {id:1,name:'one',src:urls[0]},
        {id:2,name:'two',src:urls[1]},
        {id:3,name:'two',src:urls[2]},
        {id:4,name:'two',src:urls[3]},
        {id:5,name:'two',src:urls[4]},
        {id:6,name:'two',src:urls[5]}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-block {
  float: left;
  width: 980px;
  height: 1000px;
  margin: 50px 0 0 20px;
}
.carousel-img {
  width: 490px;
  height: 280px;

}
</style>
