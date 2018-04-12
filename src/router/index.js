import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sidebar from '@/components/side'
import home from '@/components/home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        sidebar:sidebar,
        main:HelloWorld
      }
    },
    {
      path:'/home',
      name:'home',
      component:home
    }
  ]
})
