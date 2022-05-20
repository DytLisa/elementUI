import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)
// 重写push方法，避免router同一路径报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  return routerPush.call(this, location, onComplete, onAbort).catch(err => {
    if(!/^NavigationDuplicated/.test(err)) {
      console.log(err);
    }
  })
}

const routes = [
    {
        path: '/',
        name: 'vueMain',
        // component:Home
        component: () => import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'homeName',
                component:()=>import('../views/home')
            },
            {
                path:'/user',
                name:'userName',
                component:()=>import('../views/User')
            }
        ]
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router