import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e493d2e8 = () => interopDefault(import('..\\pages\\Emergency\\addEmergency.vue' /* webpackChunkName: "pages/Emergency/addEmergency" */))
const _5c29f18c = () => interopDefault(import('..\\pages\\Emergency\\deleteEmergency.vue' /* webpackChunkName: "pages/Emergency/deleteEmergency" */))
const _4ed94df7 = () => interopDefault(import('..\\pages\\Emergency\\getEmergency.vue' /* webpackChunkName: "pages/Emergency/getEmergency" */))
const _76e7c48b = () => interopDefault(import('..\\pages\\Emergency\\modifyEmergency.vue' /* webpackChunkName: "pages/Emergency/modifyEmergency" */))
const _a8805706 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Emergency/addEmergency",
    component: _e493d2e8,
    name: "Emergency-addEmergency"
  }, {
    path: "/Emergency/deleteEmergency",
    component: _5c29f18c,
    name: "Emergency-deleteEmergency"
  }, {
    path: "/Emergency/getEmergency",
    component: _4ed94df7,
    name: "Emergency-getEmergency"
  }, {
    path: "/Emergency/modifyEmergency",
    component: _76e7c48b,
    name: "Emergency-modifyEmergency"
  }, {
    path: "/",
    component: _a8805706,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
