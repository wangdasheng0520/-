import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
// 引入组件
// 登录界面
const login = ()=>import('../pages/login/login')
// 首页
const index = ()=>import('../pages/index/index')
const menu = ()=>import('../pages/menu/menu')
const home = ()=>import('../pages/home/home')
const role = ()=>import('../pages/role/role')
const manager= ()=>import('../pages/manager/manager')
const cate = ()=>import('../pages/cate/cate')
const spec = ()=>import('../pages/spec/spec')
export default new Router({
  routes: [
   {
     path:'/login',
     component:login
   },
   {
     path:'/',
     component:index,
     children:[
      {
        path:'home',
        name:'首页',
        component:home
       },
       {
         path:'menu',
         name:'菜单',
         component:menu
       },
       {
         path:'role',
         name:'角色管理',
         component:role
       },
       {
         path:'manager',
         name:'管理员管理',
         component:manager
       },
       {
         path:'cate',
         name:'商品分类',
         component:cate
       },
       {
         path:'spec',
         name:'商品规格',
         component:spec
       },
       {
         path:'',
         redirect:'/home'
       }
     
     ]
   },
   {
     path:'*',
     redirect:'/login'
   }
  ]
})
