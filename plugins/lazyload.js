import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: '/Portal/flag_min.gif',
  loading: '/Portal/loading.gif',
  attempt: 0
})
