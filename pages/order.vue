<template>
  <cube-scroll class="order">
    <nuxt-link :to="{ name: 'address-list' }" class="address">
      <div class="icon">icon</div>
      <div class="detailed">
        <div class="item horizontal">
          <div class="name">收货人：{{ address.name }}</div>
          <div class="tel">{{ address.telphone }}</div>
        </div>
        <div class="item">收货地址：{{ address.province }}{{ address.city }}{{ address.detail }}</div>
      </div>
      <div class="icon">icon</div>
    </nuxt-link>
    <div class="list">
      <div class="item">
        <div class="seller">
          <div class="avatar" data-v-9fa9feaa="" data-src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLUvjibzVW2YRjgcjS3EACZocHiasVLOBt288Q0I9waic1uwichcxBad3fIIOGNqfNI7r0GbDILWbh5vw/132" lazy="loaded" style="background-image: url(&quot;http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLUvjibzVW2YRjgcjS3EACZocHiasVLOBt288Q0I9waic1uwichcxBad3fIIOGNqfNI7r0GbDILWbh5vw/132&quot;);"></div>
          <div class="name">太空野狗</div>
        </div>
        <div class="good-list">
          <div class="good-item">
            <div class="good-item-child goodinfo">
              <div class="image" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/180528/30bb89edce73c5cab104f9119c6ed97e.jpg@640w_1l'"></div>
              <div class="text">
                <div class="title">aaa</div>
                <div class="desc">bbb</div>
                <div class="label">
                  <div class="price">¥ 2222</div>
                  <div class="number">fffff</div>
                </div>
              </div>
            </div>
            <div class="good-item-child number">
              <div class="label">购买数量</div>
              <div class="btn">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div class="good-item-child">
              <div class="label">运费</div>
              <div class="text">¥ 0</div>
            </div>
            <div class="good-item-child message">
              <div class="label">留言</div>
              <cube-textarea placeholder="请告诉我您特殊的小癖好" class="textarea"></cube-textarea>
            </div>
          </div>

        </div>
      </div>

      <div class="item">
        <div class="seller">
          <div class="avatar" data-v-9fa9feaa="" data-src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLUvjibzVW2YRjgcjS3EACZocHiasVLOBt288Q0I9waic1uwichcxBad3fIIOGNqfNI7r0GbDILWbh5vw/132" lazy="loaded" style="background-image: url(&quot;http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLUvjibzVW2YRjgcjS3EACZocHiasVLOBt288Q0I9waic1uwichcxBad3fIIOGNqfNI7r0GbDILWbh5vw/132&quot;);"></div>
          <div class="name">太空野狗</div>
        </div>
        <div class="good-list">
          <div class="good-item">
            <div class="good-item-child goodinfo">
              <div class="image" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/180528/30bb89edce73c5cab104f9119c6ed97e.jpg@640w_1l'"></div>
              <div class="text">
                <div class="title">aaa</div>
                <div class="desc">bbb</div>
                <div class="label">
                  <div class="price">¥ 2222</div>
                  <div class="number">fffff</div>
                </div>
              </div>
            </div>
            <div class="good-item-child number">
              <div class="label">购买数量</div>
              <div class="btn">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div class="good-item-child">
              <div class="label">运费</div>
              <div class="text">¥ 0</div>
            </div>
            <div class="good-item-child message">
              <div class="label">留言</div>
              <cube-textarea placeholder="请告诉我您特殊的小癖好" class="textarea"></cube-textarea>
            </div>
          </div>

          <div class="good-item">
            <div class="good-item-child goodinfo">
              <div class="image" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/180528/30bb89edce73c5cab104f9119c6ed97e.jpg@640w_1l'"></div>
              <div class="text">
                <div class="title">aaa</div>
                <div class="desc">bbb</div>
                <div class="label">
                  <div class="price">¥ 2222</div>
                  <div class="number">fffff</div>
                </div>
              </div>
            </div>
            <div class="good-item-child number">
              <div class="label">购买数量</div>
              <div class="btn">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div class="good-item-child">
              <div class="label">运费</div>
              <div class="text">¥ 0</div>
            </div>
            <div class="good-item-child message">
              <div class="label">留言</div>
              <cube-textarea placeholder="请告诉我您特殊的小癖好" class="textarea"></cube-textarea>
            </div>
          </div>

          <div class="good-item">
            <div class="good-item-child goodinfo">
              <div class="image" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/180528/30bb89edce73c5cab104f9119c6ed97e.jpg@640w_1l'"></div>
              <div class="text">
                <div class="title">aaa</div>
                <div class="desc">bbb</div>
                <div class="label">
                  <div class="price">¥ 2222</div>
                  <div class="number">fffff</div>
                </div>
              </div>
            </div>
            <div class="good-item-child number">
              <div class="label">购买数量</div>
              <div class="btn">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div class="good-item-child">
              <div class="label">运费</div>
              <div class="text">
                <template v-if="yunfei === 0">
                  免运费
                </template>
                <template v-else>
                  ¥ 2222
                </template>
              </div>
            </div>
            <div class="good-item-child message">
              <div class="label">留言</div>
              <cube-textarea style="height: 1em" placeholder="请告诉我您特殊的小癖好" class="textarea"></cube-textarea>
            </div>
          </div>

        </div>
      </div>
    </div>
    <footer class="hs-tabber" ref="tabber" data-bottom="1.3">
      <div class="text">
        总计：<span class="price">¥ 111</span> <span class="fare">含运费¥ 0</span>
      </div>
      <button @click="submit">微信支付</button>
    </footer>
  </cube-scroll>
</template>

<script>
export default {
  async asyncData (app) {
    const address = await app.$axios.$get('appv2/defaultaddress')
    return {
      address: address.data,
      yunfei: 0
    }
  },
  head() {
    return {
      title: '确认订单'
    }
  },
  layout: 'baseLayout',
  middleware: 'auth',
  methods: {
    submit () {
      console.log('生成订单')
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/common.less';

  .hs-tabber {
    width: 10rem;
    position: fixed;
    // z-index: 9;
    bottom: 0;
    background-color: #FFF;
    height: 1.3rem;
    left: 50%;
    margin-left: -5rem;
    display: flex;
    align-items: center;
    border-top: 0.013rem solid #e8e8e8;
    box-sizing: border-box;
    justify-content: flex-end;
    button {
      width: 3.41rem;
      height: 1.3rem;
      box-sizing: border-box;
      background-color: #E03B29;
      color: #fff;
      .font-dpr(16px);
      border: none;
    }
    .text {
      .font-dpr(12px);
      margin-right: .4rem;
      .price {
        .font-dpr(14px);
        color: #E03B29;
        margin-right: .27rem;
        font-family: "din";
        font-weight: 700;
      }
      .fare {
        color: #8E8E8E;
      }
    }
  }

  .order {
    background-color: #F5F5F5;
    .address {
      padding: .4rem 0;
      width: 10rem;
      box-sizing: border-box;
      margin-bottom: .21rem;
      background-color: #fff;
      color: #2D2F3C;
      display: flex;
      .icon {
        // width: 1rem;
        width: .8rem;
        padding: 0 .4rem;
        display: flex;
        align-items:center;
      }
      .detailed {
        width: 6.8rem;
        display: flex;
        flex-wrap: wrap;
        .font-dpr(13px);
        line-height: 1.4em;
        .item {
          width: 7.57rem;
          margin-bottom: .27rem;
          &:last-child {
            margin-bottom: 0;
          }
          &.horizontal {
            display: flex;
            justify-content: space-between;
          }
          .name {
            font-weight: bold;
            color: #202123;
          }
        }
      }
    }
    .list {
      background-color: #fff;
      // padding: .4rem;
      width: 10rem;
      box-sizing: border-box;
      .item {
        border-bottom: .21rem solid #F5F5F5;
        .seller {
          padding: .4rem;
          border-bottom: .013rem solid #E8E8E8;
          padding-bottom: .4rem;
          .font-dpr(13px);
          display: flex;
          .avatar {
            width: .53rem;
            height: .53rem;
            border: .04rem solid #000;
            .hs-avatar;
            margin-right: .4rem;
          }
          .name {
            height: .57rem;
            line-height: .57rem;
          }
          // margin-bottom: .4rem;
        }
        .good-list {
          .good-item {
            padding: .4rem;
            // margin-bottom: .4rem;
            &:last-child {
              // margin-bottom: 0;
              // padding-bottom: 0;
            }
            .good-item-child {
              display: flex;
              justify-content: space-between;
              border-bottom: .013rem solid #E8E8E8;
              padding: .4rem 0;
              // height: 1.2rem;
              box-sizing: border-box;
              &:first-child {
                padding-top: 0;
              }
              &:last-child {
                padding-bottom: 0;
                border-bottom: none;
              }
              & > .label {
                .font-dpr(14px);
                height: .4rem;
              }
              &.message {
                // padding: 0;
                .textarea {
                  box-sizing: border-box;
                  width: 8rem;
                  .font-dpr(14px);
                  height: 1em;
                  line-height: 1em;
                  &.cube-textarea_expanded {
                    height: 2rem !important;
                  }
                  &:after {
                    border: none;
                  }
                  .cube-textarea {
                    padding: 0;
                  }
                }
              }
              &.number {
                span {
                  margin: 0 .53rem;
                }
                button {
                  box-sizing: border-box;
                  width: .4rem;
                  height: .4rem;
                  line-height: 0;
                  border: .013rem solid #E8E8E8;
                  background-color: #fff;
                }
              }
              &.goodinfo {
                .text {
                  width: 4.99rem;
                  height: 1.93rem;
                  position: relative;
                  .title {
                    .font-dpr(13px);
                    line-height: 1.2em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                  }
                  .desc {
                    position: absolute;
                    .font-dpr(12px);
                    width: 4.99rem;
                    bottom: .56rem;
                    color: #8E8E8E;
                    line-height: 1.2em;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                  }
                  .label {
                    .font-dpr(12px);
                    position: absolute;
                    bottom: 0;
                    width: 4.99rem;
                    display: flex;
                    justify-content: space-between;
                    .price {

                    }
                    .number {
                      color: #8E8E8E;
                    }
                  }

                }
                .image {
                  width: 3.81rem;
                  height: 1.93rem;
                  .hs-cover;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
