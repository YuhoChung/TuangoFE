<template>
  <div>
    <t-header></t-header>
    
    <div class="top-wrapper">
      <logo></logo>
      <search-block></search-block>
    </div>
    
    <div class="detail-wrapper">
      <breadcrumb></breadcrumb>
      <detail-card></detail-card>
    </div>
    
  </div>
</template>


<script>
import header from './components/indexHeader.vue'
import logo from './components/logo.vue'
import searchBlock from './components/searchBlock.vue'
import breadcrumb from './components/breadcrumb.vue'
import detailCard from './components/detailCard.vue'

export default {
  components: {
    't-header': header,
    logo,
    searchBlock,
    breadcrumb,
    detailCard
  }
  
}
</script>


<style lang="less">
@theme-color: #0799a1;
@light-theme-color: rgba(7, 153, 161, 0.03);

body {
  margin: 0;
}
a {
  color: #999;
  text-decoration: none;
}
a:hover {
  color: @theme-color;
}

.clearfix:after {
  content: 'oo';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.search-btn {
  i {
    color: #fff;
  }
}

.top-wrapper {
  box-shadow: 0px 5px 30px rgba(7, 153, 161, 0.1);
  border-bottom: 1px solid @light-theme-color;
}

.detail-wrapper {
  width: 1190px;
  margin: 0 auto;
}

</style>
