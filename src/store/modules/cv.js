import axios from 'axios'
const state = {
  all: []
}
const mutations = {
  loadcv(state, cv) {
    state.all = cv
  }
}
const actions = {
  loadBlog({ commit }) {
    axios.get('https://raw.githubusercontent.com/night-yang/yangliang/master/data/cv.json').then(
      res => {
        let cv = res.data
        console.log(cv)
        commit('loadcv', cv)
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}