// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'; // 默认主题
import axios from 'axios';

Vue.use(Element)

// Vue.config.productionTip = false

Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  	router,
  	render: h => h(App)
}).$mount('#app');
