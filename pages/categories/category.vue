<template>
  <div class="categories-category-content">
    <div class="menu">
      <div class="sticky">
        <div class="item" v-for="(item, index) in categorie" :key="index">{{ item.name }}</div>
      </div>
    </div>
    <div class="list" ref="list">
      <cube-scroll :scroll-events="['scroll']" ref="scroll">
        <div class="item" v-for="(item, index) in categorie" :key="index">
          <div class="banner" v-lazy:background-image.container="item.ad_image + '@640w_1l'">
            <div class="title">{{ item.name }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <div class="children">
            <nuxt-link :to="{ name: 'category-id-tag', params: { id: children.id } }" class="children-item" v-for="(children, index) in item.children" :key="index">
              <div class="image" v-lazy:background-image.container="children.icon"></div>
              <span class="name">{{ children.name }}</span>
            </nuxt-link>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'categoriesLayout',
  async asyncData ({app}) {
    const categorie = await app.$axios.$get('appv3/categories', {
      params: {
        level: 1,
        depth: 1
      }
    })
    return {
      categorie: categorie.data
    }
  },
  mounted () {
    this.$refs.list.style.height = this.$root.$el.clientHeight + 'px'

    this.$refs.scroll.$on('scroll', object => {
      if (object.y > 0) return false

    })
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .categories-category-content {
    display: flex;
    .menu {
      width: 2.45rem;
      height: 100%;
      .sticky {
        position: fixed;
        top: 0;
        width: 2.45rem;
        height: 100%;
        background-color: #F8F8F8;
        .item {
          line-height: 1.6rem;
          height: 1.6rem;
          text-align: center;
          .font-dpr(15px);
        }
      }

    }
    .list {
      width: 7.55rem;
      box-sizing: border-box;
      padding: .53rem;
      padding-bottom: 2.5rem;
      // padding-top: 1.6rem;
      // padding-bottom: 1.3rem;
      // height: 0;
      .banner {
        width: 100%;
        height: 1.63rem;
        .hs-cover;
        color: #fff;
        text-align: center;
        padding: .32rem;
        box-sizing: border-box;
        border-radius: .11rem;
        .title {
          .font-dpr(18px);
        }
        .desc {
          margin-top: .27rem;
          .font-dpr(13px);
          font-weight: lighter;
        }
      }
      .children {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        text-align: center;
        padding: .53rem 0;
        .children-item {
          width: 1.6rem;
          margin-right: .83rem;
          margin-bottom: .4rem;
          &:nth-child(3n) {
            margin-right: 0;
          }
          .image {
            width: 1.6rem;
            height: 1.6rem;
            .hs-cover;
            background-size: 100% 100%;
          }
          .name {
            display: block;
            margin-top: .27rem;
            .font-dpr(15px);
            color: #343434;
          }
        }
      }
    }
  }
</style>
