import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Tretmani from '../views/Tretmani.vue'
import  Termini from '../views/Termini.vue'
import User from '../views/User.vue'
import Register from '../views/Register.vue'
import Recenzija from '../views/Recenzije.vue'
import Akcije from '../views/Akcije.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    name:"LogIn",
    component: LogIn
  }, 
  {
    path:"/tretmani",
    name:"Tretmani",
    component: Tretmani
  },
  {
    path:"/termini",
    name:"Termini",
    component: Termini
  },
  {
    path:"/user",
    name:"User",
    component: User
  },
  {
    path:"/register",
    name:"Register",
    component: Register
  },
  {
    path:"/recenzije",
    name:"Recenzije",
    component: Recenzija
  },
  {
    path:"/akcije",
    name:"Akcije",
    component: Akcije
  }



]

const router = new VueRouter(
  {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}


)

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    const jwt = localStorage.getItem('token');

    if (!token) {
      next({name: 'LogIn'});
      return;
    }

    const payload = JSON.parse(atob(jwt.split('.')[1]));
    const expDate = new Date(payload.exp * 1000);
    if (expDate < new Date()) {
      next({name: 'LogIn'});
      return;
    }
  }

  next();
});

export default router
