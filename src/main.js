import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import refreshRequested from './events/refreshRequested'
import refreshSuccessful from './events/refreshSuccessful'
import refreshFailed from './events/refreshFailed'

import refresh from './commands/refresh'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    bacon: {
      isLoading: false,
      text: '',
      error: ''
    },
  },
  mutations: {
    refreshRequested, refreshSuccessful, refreshFailed
  },
  actions: {
    refresh
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
