import LoginView from '../view/LoginView'

import {createRouter,createWebHistory} from 'vue-router'
import type {RouteRecordRaw,RouterHistory,} from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/login', component: LoginView, name: 'Login' },    
  
   
  ]
let history: RouterHistory
history = createWebHistory()

export const router = createRouter({routes,history})
 

