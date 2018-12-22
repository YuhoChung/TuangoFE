import Vue from 'vue'
import index from './index.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(elementUI);

new Vue({
  render: h => h(index),
}).$mount('#tuango')
