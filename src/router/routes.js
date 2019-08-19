import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Things from '../pages/Things/Things.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/class',
    component: Class,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/home'
  }
]
