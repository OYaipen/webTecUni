function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },
  { path: '/contactenos', name: 'contact', component: page('contact.vue') },
  { path: '/nosotros', name: 'we', component: page('we.vue') },
  { path: '/servicios', name: 'service', component: page('service.vue') },

  { path: '*', component: page('errors/404.vue') }
]
