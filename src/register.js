import Vue from 'vue'
import register from './register.vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.config.productionTip = false;
Vue.use(elementUI);

// console.log(register);

new Vue({
  render: h => h(register),
}).$mount('#register')










