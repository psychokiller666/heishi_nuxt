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
  },
  async setToken (state, data) {
    state.global.token = data
    // 设置token
    await this.$axios.setToken(state.global.token)
    console.log('执行了')
  }
}

export const actions = {
  nuxtServerInit: (store, { params, route, req }) => {
      // console.log(store)
      store.commit('setApiVersion')
  },
  async getMessagesCounts ({ commit }) {
    // const counts = await this.$axios.get('appv4/messages/counts')
    commit('setMessages', {
      new_comments: 2,
      system: 3,
      order: 4
    })
    // console.log(this)
  },
  async getWchatLogin ({ commit }, code) {

    // const token = await this.$axios.get('login')
    let temp = 'bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpdGVzdC5vbnRoZXJvYWRzdG9yZS5jb20vYXBwdjVfMS9sb2dpbi93ZWNoYXRhcHAiLCJpYXQiOjE1MjY3NDA4NzMsImV4cCI6MTUyNjk1Njg3MywibmJmIjoxNTI2NzQwODczLCJqdGkiOiI2bkhRVExORno5Z29xajI2Iiwic3ViIjo3MCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.K1giVmB8DsVJqfH_tNDKkhb-7yITe7Z9XajwUOKvyb0'
    commit('setToken', temp)
  }
}

export const getters = {
  getVersion: state => {
    return state.global.version
  }
}
