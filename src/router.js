import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Blogcontent from '@/components/Blogcontent'
import BlogList from '@/components/BlogList'
import CV from '@/components/CV'
import ga from '@/components/ga'
import note from '@/components/Note'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/resume',
      component:CV
    },
    {
      path:'/ga',
      component:ga,
    },
    {
      path: '/ga/:id',
      component: ga
    },
    {
      path: '/note',
      component:note
    },
    {
      path: '/blog',
      component: Blog,
      children:[
        {
          path: '',
          component: BlogList
        },
        {
          path: ':id',
          component: Blogcontent
        }
      ]
    },
  ]
})