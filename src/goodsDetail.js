import Vue from 'vue'
import goodsDetail from './goodsDetail.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(elementUI);

new Vue({
  render: h => h(goodsDetail),
}).$mount('#tuango')
