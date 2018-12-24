<template>
  <a href="javascript:;" class="goods-item">
    <img src="../assets/g3.jpg" alt="">
    <span class="title">【流光】ins浴缸拍照/100寸巨幕投影/复古文艺密码锁独立公寓/天津站远洋国际地铁口5分钟/未来广场商圈/意式风情街</span>
    <span class="sub-title">整套可住2人</span>
    <span class="price-icon">¥</span>
    <span class="price">238</span>
    <span class="old-price">门市价¥333</span>
    <span class="location">王府井/东单</span>


  </a>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
.goods-item {
  float: left;
  display: block;
  box-sizing: border-box;
  width: (1/3)*100%;
  padding: 10px;
  border-radius: 5px;
  color: #fefefe;

  

  img {
    display: block;
    width: 100%;
  }

  .title {
    display: block;
    margin-top: 5px;
    color: #222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .sub-title {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #999;
  }

  .price-icon {
    // float: left;
    color: #87a8af;

  }

  .price {
    // float: left;
    font-size: 25px;
    color: #87a8af;

  }

  .old-price {
    // float: left;
    margin-left: 5px;
    font-size: 14px;
    text-decoration: line-through;
    color: #999;

    // vertical-align: bottom;
  }

  .location {
    float: right;
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }
}

.goods-item:hover {
  background-color: #f4f4f4;
  transition: background-color .5s;
}

</style>
