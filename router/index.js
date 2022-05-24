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
        name: 'Main',
        // component:Home
        component: () => import('../views/Main.vue'),
        redirect:'home',
        children:[
            // {
            //     path:'/home',
            //     name:'home',
            //     component:()=>import('../views/home')
            // },
            // {
            //     path:'/user',
            //     name:'user',
            //     component:()=>import('../views/User')
            // },
            // {
            //     path:'/mall',
            //     name:'mall',
            //     component:()=>import('../views/mall')
            // },
            // {
            //     path:'/page1',
            //     name:'page1',
            //     component:()=>import('../views/other/pageOne.vue')
            // },
            // {
            //     path:'/page2',
            //     name:'page2',
            //     component:()=>import('../views/other/pageTwo.vue')
            // }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router