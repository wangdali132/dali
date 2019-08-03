import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/qian/login/login'
import zhu from '@/qian/zhu/zhu'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path:'/qian/zhu/zhu',
      name:'zhu',
      component: zhu,
      meta:{
        require:true//该路径的访问需要登录
      },
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{
        require:false//该路径的访问不需要登录
      }
    }
  ]
})
