import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import AmazeVue from 'amaze-vue';
// import 'amazeui/dist/css/amazeui.min.css';

// import 'amazeui/dist/js/amazeui.min.js';

// import 'amaze-vue/dist/amaze-vue.css';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



Vue.prototype.changeData = function () {}