import axios from 'axios'
const state = {
  all:[]
}
const mutations = {
  loadBlog(state, blogs) {
    state.all = blogs
  }
}
const actions = {
  loadBlog({ commit }){
    axios.get('https://raw.githubusercontent.com/night-yang/yangliang/master/data/blog.json').then(
      res=>{
        let blogs = res.data
        commit('loadBlog',blogs)
      }
    )
  }
}

export default {
  state,
  mutations,
  actions
}