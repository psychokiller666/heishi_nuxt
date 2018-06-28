export const state = () => ({
  goods: [],
  recommended: []
})

export const mutations = {
  setGoods: (state, action) => {
    state.goods = action
  },
  setRecommended: (state, action) => {
    state.recommended = action
  }
}

export const actions = {
  async getCart ({ commit }) {
    await this.$axios.get('appv4/getcart').then(res => {
      // console.log(res.data.data.cart[0].item)
      commit('setGoods', res.data.data.cart)
      commit('setRecommended', res.data.data.recommended)
    })
  },
  async deleteCartGood({ commit, dispatch }, cart_row_id) {
    await this.$axios.post('appv2/removeitemfromcart', {
      cart_row_id: cart_row_id
    }).then(res => {
      dispatch('getCart')
    })
  },
  async addCartGood({ commit, dispatch }, parameter) {
    await this.$axios.post('appv2/additemintocart', parameter).then(res => {
      this.dispatch('getMessagesCounts')
    })
  }
}
