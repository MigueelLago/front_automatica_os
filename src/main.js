import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LoginComponent from './pages/login/LoginComponent.vue'
import HomeComponent from './pages/home/HomeComponent.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', 
    name: 'login',
    beforeEnter: function(to, from, next){
      const token = localStorage.getItem('user-token')
      if(token){
        next('/home')
      }else{
        next()
      }
    },
    component: LoginComponent 
  },

  { path: '/home', 
    name: 'home', 
    beforeEnter: function(to, from, next){
      const token = localStorage.getItem('user-token')
      if(!token){
        next('/')
      }else{
        next()
      }
    },
    component: HomeComponent 
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
