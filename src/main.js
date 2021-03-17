// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 引入重置样式
import "./assets/css/reset.css";

// 引入公共组件
import Com from "./components";
for(let i in Com){
  Vue.component(i,Com[i])
}

// 引入全局过滤器
import Fil from "./filters";
for(let i in Fil){
  Vue.filter(i,Fil[i])
}

// 引入store
import store from "./store";


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$preImg = "http://localhost:3000";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
