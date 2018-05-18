<template>
  <Popup type="sku-popup" addbodyend ref="skuPopup" position="bottom">
    <div class="box">
      <div class="image" :style="{ 'background-image' : 'url('+ banner +'@640w_1l)' }"></div>
      <div class="title">{{ title }}</div>
      <div class="price">￥1</div>
      <div class="item">
        <div class="label">款式</div>
        <div class="tags">
          <span v-for="(item, index) in data" :key="index">{{ item.name }}</span>
          <!-- <span>完</span> -->
        </div>
      </div>
      <div class="item">
        <div class="label">数量</div>
        <div class="number">
          <cube-button>-</cube-button>
            <span>1</span>
          <cube-button>+</cube-button>
        </div>
      </div>
    </div>
    <div class="feature">
      <cube-button>加入购物车</cube-button>
      <cube-button>立即购买</cube-button>
    </div>
  </Popup>
</template>

<script>
import Popup from '~/components/basePopup.vue'

export default {
  props: {
    title: {
      type: String
    },
    banner: {
      type: String
    },
    data: {
      type: Array
    }
  },
  methods: {
    show () {
      this.$refs.skuPopup.show()
    },
    hide () {
      this.$refs.skuPopup.hihe()
    }
  },
  computed: {
    skuArray () {
      return [
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3'
        }
      ]
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .cube-sku-popup {
    .box {
      background-color: #fff;
      padding: 2.04rem 0;
      box-sizing: border-box;
      position: relative;
      border-radius: .21rem .21rem 0 0;
      // width: 10rem;
      .image {
        position: absolute;
        width: 5.25rem;
        height: 2.69rem;
        left: .4rem;
        top: -1.21rem;
        .hs-cover;
      }
      .title {
        .font-dpr(16px);
        padding: 0 .4rem;
        margin-bottom: .4rem;
      }
      .price {
        padding: 0 .4rem;
        padding-bottom: .4rem;
        margin-bottom: .4rem;
        border-bottom: .013rem solid #E8E8E8;
        font-family: "din";
        font-weight: 700;
        .font-dpr(18px);
      }
      .item {
        display: flex;
        padding: 0 .4rem;
        .label {
          width: .88rem;
          .font-dpr(15px);
          line-height: .64rem;
          margin-right: .4rem;
        }
        .number {
          display: flex;
          line-height: .64rem;
          span {
            margin: 0 .53rem;
            .font-dpr(16px);
            font-family: "din";
            font-weight: 700;
          }
          button {
            border: .03rem solid #999;
            background-color: #fff;
            width: .64rem;
            height: .64rem;
            display: block;
            box-sizing: border-box;
            color: #999;
            padding: 0;
            text-align: center;
            line-height: 1em;
            font-size: .37rem;
            border-radius: .12rem;
          }
        }
      }
    }
    .feature {
      display: flex;
      height: 1.3rem;
      .cube-btn {
        // display: inline-block;
        width: 50%;
        height: 1.3rem;
        border: none;
      }
    }
  }
</style>
