import Vue from 'vue'
import App from './App.vue'
import './assets/less/index.less'
// 全局引入
// import ElementUI from 'element-ui';
// 按需引入，需要什么引入什么
import {
  Button,
  Radio,
  Container,
  Main,
  Header,
  Aside,
  Menu,
  Submenu,
  MenuItem, 
  MenuItemGroup, 
  Dropdown, 
  DropdownMenu, 
  DropdownItem, 
  Row, 
  Col, 
  Card, 
  Table, 
  TableColumn, 
  Breadcrumb, 
  BreadcrumbItem, 
  Tag, 
  Form,
  FormItem, 
  Input, 
  Select, 
  Switch, 
  DatePicker, 
  Option, 
  Dialog,
  Pagination,
  MessageBox,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'
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
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)


// 阻止网页在开发时提示生产信息
Vue.config.productionTip = false
// 全局引入
// Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message

// 导航守卫，监听
router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token=store.state.user.token
  if(!token && to.name !=='login'){
    next({name:'login'})
  }else if(token && to.name==='login'){
    next({name:'home'})
  }else{
    next()
  }
})
new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    this.$store.commit("addMenu", router); // 动态添加路由
  }
}).$mount('#app')
