import Vue from 'vue'
import Router from 'vue-router'

import Testing from '@/components/Testing'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    { path: '/', redirect: '/testing' },
    {
      path: '/testing',
      name: 'Testing',
      components: {testing: Testing}
    },
    {
      path: '/weather',
      name: 'Weather',
      components:{weather: Weather}
    }
  ]
})
