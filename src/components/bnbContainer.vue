<template>
  <div class="bnb-container">
    <bnb-tab></bnb-tab>
    <div class="card-wrapper clearfix">
        <bnb-item></bnb-item>
        <bnb-item></bnb-item>
        <bnb-item></bnb-item>
        <bnb-item></bnb-item>
        <bnb-item></bnb-item>
        <bnb-item></bnb-item>
    </div>
  </div>
</template>

<script>
import bnbItem from './bnbItem.vue'
import bnbTab from './bnbTab.vue'
export default {
  components: {
    bnbItem,
    bnbTab
  }

};
</script>


<style lang="less" scoped>
@border:rgba(7, 153, 161, 0.25);
.bnb-container {
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
