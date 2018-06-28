export const state = () => ({
  global: {
    version: '3.3.1',
    messages: {
      new_comments: 0,
      system: 0,
      order: 0
    }
  }

})

export const mutations = {
  setMessages: (state, data) => {
    state.global.messages = data
  }
}

export const actions = {
  nuxtServerInit: (store, { params, route, req }) => {
      // console.log(store)
      // store.commit('setApiVersion')
  },
  async getMessagesCounts ({ commit }) {
    await this.$axios.get('appv4/messages/counts').then(res => {
      console.log(res)
    })
    // commit('setMessages', {
    //   new_comments: 2,
    //   system: 3,
    //   order: 4
    // })
  },
  getRefreshToken ({ commit } ,token) {
    this.$auth.setToken('local', token)
    console.log(token)
  }
}

export const getters = {
  getVersion: state => {
    return state.global.version
  },
  getMessages: state => {
    return state.global.messages
  }
}
