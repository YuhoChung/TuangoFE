<template>
  <div class="goods-tab">
    
    <ul class="clearfix">
      <li class="head">民宿</li>
      <li>大理</li>
      <li>丽江</li>
      <li>桂林</li>
      <li>北京</li>
      <li>成都</li>
      <li>重庆</li>
    </ul>
  </div>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.goods-tab {
  width: 100%;
  height: 40px;
  background-color: #fe4585;
  border-radius: 5px 5px 0 0;

  ul {
    margin: 0;
    list-style-type: none;
    padding-left: 0;

    .head {
      margin-left: 20px;
      line-height: 40px;
      color: #fff;
      font-size: 18px;
      cursor: auto;
    }
    
    li {
      float: left;
      margin-left: 10px;
      line-height: 40px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;

    }

  }
}
</style>
