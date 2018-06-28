<template>
  <cube-scroll class="index-cart">
    <div class="cart" v-if="cart.length">
      <div class="item" v-for="(item, index) in cart" :key="index">
        <div class="seller">
          <div class="checkbox">
            <input type="checkbox" :value="index" v-model="sellerChecked" />
          </div>
          <nuxt-link :to="{ name: 'user-id', params: { id: item.seller_user_id }}">{{ item.seller_name }}</nuxt-link>
        </div>
        <div class="list">
          <div class="good-item" v-for="good in item.item" :key="good.id">
            <div class="checkbox">
              <input type="checkbox" v-model="checkList" :value="good.id" v-if="good.status === 1" />
              <span class="fail" v-else>失效</span>
            </div>
            <nuxt-link :to="{ name: 'detail-id', params: { id: good.item_id } }" class="image" v-if="good.status === 1" v-lazy:background-image.container="good.image+ '@640w_1l'">
              <div class="prompt" v-show="good.labels.length">{{ good.labels[0] }}</div>
            </nuxt-link>
            <div class="image fail" v-else v-lazy:background-image.container="good.image+ '@640w_1l'">
              <div class="prompt"></div>
            </div>
            <div class="text">
              <div class="title" :class="good.status ? '' : 'fail'">{{ good.item_name }}</div>
              <div class="label" v-show="good.status">
                <div class="desc">{{ good.model_desc }}</div>
                <div class="price">¥ {{ good.price }}</div>
              </div>
              <div class="btn" v-if="good.status === 1">
                <button @click="updateInventory(good.id, good.numbers, -1)" :disabled="good.numbers === 1">-</button>
                <span>{{ good.numbers }}</span>
                <button @click="updateInventory(good.id, good.numbers, 1)" :disabled="good.remain === good.numbers">+</button>
              </div>
              <div class="failinfo" v-else>
                <span v-if="good.remain ===0">商品已售罄</span>
                <span v-else>商品已下架</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button @click="test">删除</button> -->
    </div>
    <div class="not-data" v-else>
      <div class="item">
        <img class="jiangzemin" v-lazy="'//img8.ontheroadstore.com/upload/180116/75948a9b79dfa13c50da3c3b78fb20c5.png'" />
      </div>
      <div class="item label">购物车里毛都没有</div>
      <div class="item">
        <nuxt-link to="/"><img class="go-index" v-lazy="'//img8.ontheroadstore.com/upload/180116/38b410551ed00fe3bf4bc1106c3ca68a.png'" /></nuxt-link>
      </div>
    </div>
    <guessLike :data="recommended">
      <div class="label" slot="header">
        <span>猜你喜欢</span>
      </div>
    </guessLike>
    <!-- navber -->
    <!-- tabber -->
    <div class="tabber-child" data-bottom="1.3">
      <div class="checkbox">
        <input type="checkbox" @click="checkedAll" /> 全选
      </div>
      <div class="total">
        <span class="price">¥ 111</span> <span class="fare">含运费¥ 0</span>
      </div>
      <button>买他妈的</button>
    </div>
  </cube-scroll>
</template>

<script>
import guessLike from '~/components/baseGuessLike.vue'

export default {
  layout: 'indexLayout',
  middleware: 'auth',
  async asyncData ({ app, store }) {
    await store.dispatch('cart/getCart')
    return {
      // cart: store.state.cart.goods,
      recommended: store.state.cart.recommended,
      checkList: [],
      sellerChecked: []
    }
  },
  head () {
    return {
      title: '购物车'
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart.goods
    }
  },
  components: {
    guessLike
  },
  watch: {
    sellerChecked: {
      handler (newVal, oldVal) {
        // console.log(newVal, oldVal)
        console.log(this.sellerChecked.length)
        newVal.forEach(checkbox => {

          // console.log('增加全选：', checkbox)
          // console.log(this.cart[checkbox].item.length)
          this.cart[checkbox].item.forEach((item) => {
            if (item.status && item.remain) {
              this.checkList.push(item.id)
            }
          })
        })
      },
      deep: true
    }
  },
  methods: {
    async test() {
      // console.log(this.$refs)
      const temp = []
      this.$refs.checkboxGood.forEach((item, index) => {
        if (item.checked) {
          temp.push(item.dataset.id)
        }
      })
      await this.$store.dispatch('cart/deleteCartGood', temp)
    },
    // 全选
    checkedAll () {
      console.log(this)
    },
    // 增加商品数量
    async updateInventory(id, number, increase) {
      await this.$axios.post('appv5/cart/' + id, {
        increase: increase
      }).then(res => {
        const loading = this.$createToast({
          time: 9999,
          txt: '正在处理'
        }).show()
        switch(res.data.status) {
          case 1:
            this.$store.dispatch('cart/getCart').then(() => {
              loading.hide()
            })
            break;
          default:
            loading.hide()
            this.$createToast({
              time: 1000,
              txt: res.data.info
            }).show()
            break;
        }
      })
    }

  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';

  .tabber-child {
    width: 10rem;
    position: fixed;
    bottom: 1.3rem;
    background-color: #FFF;
    height: 1.3rem;
    left: 50%;
    margin-left: -80px;
    margin-left: -5rem;
    display: flex;
    align-items: center;
    border-top: 0.208px solid #e8e8e8;
    border-top: 0.013rem solid #e8e8e8;
    box-sizing: border-box;
    line-height: 0;
  }

  .index-cart {
    .cart {
      // padding: .4rem;
      .item {
        display: flex;
        flex-wrap: wrap;
        border-bottom: .2rem solid #f5f5f5;
        .checkbox {
          // padding: 0 .4rem;
          display: flex;
          // justify-content: flex-end;
          align-items: center;
          input {
            width: .43rem;
            height: .43rem;
          }
        }
        .seller {
          display: flex;
          width: 10rem;
          box-sizing: border-box;
          .font-dpr(14px);
          border-bottom: 0.013rem solid #e8e8e8;
          margin: .4rem;
          padding-bottom: .4rem;
          .checkbox {
            margin-right: .4rem;
          }
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          width: 10rem;
          box-shadow: border-box;
          .checkbox {
            // padding: 0 .4rem;
            width: .83rem;
            .fail {
              .font-dpr(9px);
              color: #F8F8F8;
              background-color: #8E8E8E;
              padding: .12rem .09rem;
              border-radius: 1rem;
            }
          }
          .good-item {
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            width: 10rem;
            box-sizing: border-box;
            margin: 0 .4rem .4rem .4rem;
            border-bottom: 0.013rem solid #e8e8e8;
            padding-bottom: .4rem;
            &:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }
            .image {
              width: 3.81rem;
              height: 1.92rem;
              border-radius: .16rem;
              .hs-cover;
              position: relative;
              &.fail {
                .prompt {
                  background:rgba(255, 255, 255, 0.6);
                  font-size: 0;
                  overflow: hidden;
                  height: 100%;
                }
              }
              .prompt {
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                padding: .133rem 0;
                border-radius: 0 0 .16rem .16rem;
                // height: .56rem;
                // line-height: .56rem;
                background:rgba(0, 0, 0, .7);
                .font-dpr(12px);
                color: #fff;
              }
            }
            .text {
              width: 4rem;
              height: 1.92rem;
              position: relative;
              .title {
                color: #202123;
                line-height: 1.2em;
                .font-dpr(13px);
                overflow: hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-box-orient:vertical;
                -webkit-line-clamp:1;
                &.fail {
                  color: #B2B2B2;
                }
              }
              .label {
                display: flex;
                justify-content: space-between;
                .font-dpr(12px);
                margin-top: .16rem;
                .desc {
                  color: #8E8E8E;
                }
                .price {
                  .font-dpr(13px);
                  color: #AE2121;
                  font-family: "din";
                  font-weight: 700;
                }
              }
              .failinfo {
                position: absolute;
                bottom: 0;
                span {
                  // margin: 0 .53rem;
                  .font-dpr(13px);
                  // font-family: "din";
                  // font-weight: 700;
                  // line-height: 0;
                  color: #333;
                }
              }
              .btn {
                position: absolute;
                bottom: 0;
                span {
                  margin: 0 .53rem;
                  .font-dpr(14px);
                  font-family: "din";
                  font-weight: 700;
                  line-height: 0;
                }
                button {
                  width: .4rem;
                  height: .4rem;
                  border: .0133rem solid #979797;
                  background: transparent;
                  line-height: 0;
                  border-radius: .11rem;
                  color: #979797;
                }
              }
            }
          }
        }
      }
    }
    .not-data {
      width: 10rem;
      box-sizing: border-box;
      padding: 1.69rem 0;
      border-bottom: .2rem solid #f5f5f5;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 10rem;
        margin-bottom: .4rem;
        .font-dpr(14px);
        &.label {
          margin-bottom: .8rem;
        }
        &:last-child {
          margin-bottom: 0;
        }
        // 蛤蛤的眼镜
        .jiangzemin {
          width: 2.14rem;
        }
        .go-index {
          width: 3.45rem;
        }
      }
    }
    .cart {
      // border-bottom: .2rem solid #f5f5f5;
    }
  }
</style>
