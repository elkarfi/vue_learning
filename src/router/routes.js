
const routes = [
  {
    path: '',
    name: 'base',
    component: () => import('../components/authentication/register.vue')
  },
  
  // {
  //   path: '',
  //   name: 'register',
  //   component: () => import('../components/authentication/register.vue')
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import('../components/authentication/login.vue')
  }
]

export default routes
