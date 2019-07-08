import VueRouter from 'vue-router'
import NotFound from "./Error"
import Dashboard from "./Dashboard";

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },

    {
      path: '/dashboard',
      component: Dashboard,
      name: 'dashboard'
    },
    {
      path: '*',
      component: NotFound
    },
  ],
  mode: 'history',
})


