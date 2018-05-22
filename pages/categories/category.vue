<template>
  <div class="categories-category-content">
    <div class="menu">
      <cube-scroll class="sticky">
        <div :class="['item', index === itemIndex ? 'activ_item' : '']" v-for="(item, index) in categorie" :key="index" @click="tabCategories(index)">{{ item.name }}</div>
      </cube-scroll>
    </div>
    <div class="list" ref="list">
      <cube-scroll :scroll-events="['scroll']" ref="scroll">
        <div :class="['item', index === categorie.length - 1 ? 'last_item' : '']" v-for="(item, index) in categorie" :key="index" :ref="'item' + index">
          <div class="banner"  v-lazy:background-image.container="item.ad_image + '@640w_1l'">
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
  data () {
    return {
      itemIndex: 0,
      categoriesList: []
    }
  },
  mounted () {
    this.$refs.list.style.height = this.$root.$el.clientHeight + 'px'
    let itemHeight = [0]
    Object.keys(this.$refs).forEach((key) => {
      if(this.$refs[key][0]){
        itemHeight.push(this.$refs[key][0].clientHeight)
      }
    })
    let height = 0
    itemHeight.forEach( (item, index) => {
      height = height + item
      this.categoriesList.push(height)
    })
    this.$refs.scroll.$on('scroll', object => {
      this.categoriesList.forEach( (item, index) => {
        const y = Math.abs(object.y)
        if (y >= item && y < this.categoriesList[index + 1]) {
          this.itemIndex = index
        }
      })
    })
  },
  methods: {
    tabCategories (index) {
      this.$refs.scroll.scrollTo(0, -this.categoriesList[index], 200)
    }
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
        .activ_item{
          position: relative;
          background-color: #FFF;
          color: #AE2121;
          &:after{
            content: '';
            position: absolute;
            width: 0.16rem;
            height: 1.013rem;
            left: 0;
            top: 0.2935rem;
            background-color: #AE2121;
          }
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
      .last_item{
        min-height: 100vh;
      }
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
