import Vue from 'vue'
import Vuex from 'vuex'
import { BUILD_TREE } from './mutation-types'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters: {},

  state: {
    tree: [] // 预览图组件树
  },

  mutations: {
    [BUILD_TREE]: (state, tree) => {
      state.tree = tree
    }
  },

  actions: {}
})

export default store
