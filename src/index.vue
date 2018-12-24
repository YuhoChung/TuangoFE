<template>
  <div id="tuango">
    <index-header></index-header>
    <div>
    <logo></logo>
    <!-- <div class="test"></div> -->
    <searchBlock></searchBlock>
    </div>

    <div class="clearfix">
      <left-nav></left-nav>
      <carousel></carousel>
    </div>


    <goodsContainer></goodsContainer>
    <bnb-container></bnb-container>
    <t-footer class="t-footer"></t-footer>
  </div>
</template>

<script>
import indexHeader from './components/indexHeader.vue'
import logo from './components/logo.vue'
import searchBlock from './components/searchBlock.vue'
import nav from './components/nav.vue'
import carousel from './components/carousel.vue'
import goodsContainer from './components/goodsContainer.vue'
import bnbContainer from './components/bnbContainer.vue'
import footer from './components/footer.vue'

export default {
  name: 'appo98k',
  components: {
    indexHeader,
    logo,
    searchBlock,
    'left-nav': nav,
    carousel,
    goodsContainer,
    bnbContainer,
    't-footer': footer

  },
  kill: 'ok'
}
</script>

<style lang='less'>
@theme-color: #0799a1;
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

.nav {
  margin-left: 65px
}

.search-btn {
  i {
    color: #fff;
  }
}

.clearfix:after {
  content: 'oo';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.t-footer {
  margin-top: 120px !important;
}


// .test {
//   display: inline-block;
//   width: 400px;
//   height: 30px;
//   background-color: red;
// }
</style>
