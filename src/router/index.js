import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/homePage/home'

Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to){
  return VueRouterPush.call(this, to).catch(err => err)
}

const whiteList = ['/login', '/404']
const router =  new Router({
  routes: [
    {path: '/404', name: '404', component: ()=> import('@/view/error/404')},
    {path: '/login', name: 'login', component: () => import('@/view/login/Login')},
    {path:'/home', name: '首页', component: Home},
    {path:'/monitor', name: '运维监控', component: ()=> import('@/view/monitor/monitor')},
    {path:'/statistics', name: '运行大数据统计', component: ()=>import('@/view/statistics/statistics')},
    {path:'/alarm', name: '告警与诊断', component: ()=>import('@/view/alarm/alarm')},
    {path:'/predict', name: '运维大数据预测', component: ()=>import('@/view/predict/predict')}
  ]
})

router.beforeEach((to, from, next) =>{
    const isLogin = sessionStorage.getItem('token') ? true : false;
    if(isLogin){
      if(to.path == '/login' || to.path == '/'){
        next({
          path: '/home'
        })
      }else{
        next()
      }
    }else{
      if(whiteList.indexOf(to.path) != -1){
        next()
      }else{
        next('/login')
      }
    }

})

export default router;
