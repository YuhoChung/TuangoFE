<template>
  <div class="goods-container">
    <goodsTab></goodsTab>
    <div class="card-wrapper clearfix">
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
    </div>
  </div>
</template>

<script>
import goodsItem from './goodsItem.vue'
import goodsTab from './goodsTab.vue'
export default {
  components: {
    goodsItem,
    goodsTab
  }

};
</script>


<style lang="less" scoped>
@border:rgba(7, 153, 161, 0.25);
.goods-container {
  width: 1190px;
  margin: 30px auto 0;
  // padding: 10px;
  // background-color: red;
  border: 1px solid @border;
  border-radius: 5px;
  .card-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
  }

}
</style>
