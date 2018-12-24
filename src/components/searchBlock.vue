<template>
  <el-input
    class="search-block"
    placeholder="想要什么，搜一下">
    <el-button
      class="search-btn"
      slot="append"
      icon="el-icon-search">
    </el-button>
  </el-input>
</template>



<script>
export default {
  
}
</script>

<style lang="less" scoped>
  @theme-color: #0799a1;
  .search-block { 
    // display: block;     
    width: 550px !important;
    margin: 55px 0 0 140px;
    .search-btn {
      background-color: @theme-color !important;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      i {
        color: #fff !important; 
      }

    }
  }

</style>
