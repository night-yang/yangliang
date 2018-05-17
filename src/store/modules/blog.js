import axios from 'axios'
const state = {
  all:[]
}
const mutations = {
  addBlog(state, blog) {
    state.all.push(blog)
  },
  loadBlog(state, blogs) {
    state.all = blogs
  }
}
const actions = {
  addBlog({ commit }, { blog }) {
    commit('addComment', blog)
  },
  loadBlog({ commit }){
    axios.get('http://localhost:3008/blogs').then(
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