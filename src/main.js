import Vue from 'vue'
import App from './App.vue'
// 全局引入
// import ElementUI from 'element-ui';
// 按需引入，需要什么引入什么
import {Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import router from '../router'
 Vue.use(Button)
 Vue.use(Radio)
 Vue.use(Container)
 Vue.use(Main)
 Vue.use(Header)
 Vue.use(Aside)
 Vue.use(Menu)
 Vue.use(Aside)
 Vue.use(Submenu)
 Vue.use(MenuItem)
 Vue.use(MenuItemGroup)
// 阻止网页在开发时提示生产信息
Vue.config.productionTip = false
// 全局引入
// Vue.use(ElementUI)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
