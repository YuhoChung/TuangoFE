<template>
  <div class="goods-tab">
    
    <ul class="clearfix">
      <li class="head">美食</li>
      <li>咖啡</li>
      <li>烘焙</li>
      <li>自助餐</li>
      <li>日韩料理</li>
      <li>川湘菜</li>
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
  background-color: #0084ffbe;
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
