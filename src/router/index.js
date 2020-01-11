import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout')
const Home = () => import('@/views/home')
const Question = () => import('@/views/question')
const Video = () => import('@/views/question')
const User = () => import('@/views/user')
const Profile = () => import('@/views/user/profile')
const Chat = () => import('@/views/user/chat')
const Login = () => import('@/views/login')
const Article = () => import('@/views/article')
const Search = () => import('@/views/search')
const SearchResult = () => import('@/views/search/result')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout, // 一级路由
    children: [{
      path: '/',
      component: Home// 二级路由
    },
    {
      path: '/question',
      component: Question// 二级路由 问答组件
    },
    {
      path: '/video',
      component: Video// 二级路由 视频组件
    },
    {
      path: '/user',
      component: User// 二级路由 个人中心
    }]
  },
  {
    path: '/user/profile',
    component: Profile// 编辑资料
  },
  {
    path: '/user/chat',
    component: Chat// 小智同学
  },
  {
    path: '/login',
    component: Login// 登录组件
  },
  {
    path: '/article',
    component: Article// 文章详情
  },
  {
    path: '/search',
    component: Search// 搜索中心
  },
  {
    path: '/search/result',
    component: SearchResult// 搜索结果
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
