import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import store from './store';

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  store
}).$mount('#app')
