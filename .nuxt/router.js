import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3802747b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0e6f21a4 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _43b4160e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7daeff80 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _c3b96298 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _57ba4f40 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/dance-studio-gate/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3802747b,
    name: "about"
  }, {
    path: "/blog",
    component: _0e6f21a4,
    name: "blog"
  }, {
    path: "/contact",
    component: _43b4160e,
    name: "contact"
  }, {
    path: "/gallery",
    component: _7daeff80,
    name: "gallery"
  }, {
    path: "/pricing",
    component: _c3b96298,
    name: "pricing"
  }, {
    path: "/",
    component: _57ba4f40,
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
