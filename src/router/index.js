import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/pages/Index'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Other from '@/pages/Other'


import Back from '@/pages/Back'

import A from '@/pages/A'
import B from '@/pages/B'
import C from '@/pages/C'
import D from '@/pages/D'






import NotFound from '@/pages/404'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/home',
          name: 'Home',
          component: Home,
          meta:{
            title:'Home'
          }
        },
        {
          path:'/about',
          name: 'About',
          component: About,
          meta:{
            title:'About'
          }
        },
        {
          path:'/other',
          name: 'Other',
          component: Other,
          meta:{
            title:'Other'
          }
        }
      ]
    },
    {
      path:'/',
      name:'Back',
      component:Back,
      children:[
        {
          path:'/a',
          name: 'A',
          component: A,
          meta:{
            title:'aaaaa'
          }
        },
        {
          path:'/b',
          name: 'B',
          component: B,
          meta:{
            title:'bbbbb'
          }
        },
        {
          path:'/c',
          name: 'C',
          component: C,
          meta:{
            title:'ccccc'
          }
        },
        {
          path:'/d',
          name: 'D',
          component: D,
          meta:{
            title:'ddddd'
          }
        },
        {
          path:'*',
          name:'NotFound',
          component:NotFound
        }
      ]
    },
    
  ]
})
