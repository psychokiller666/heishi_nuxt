<template>
  <cube-scroll :data="goodslist" class="project-id-posts">
    <header class="navber">
      <Banner>
        <baseTitle slot="header" :title="project.project_name" :label="project.project_desc" class="banner-header" />
      </Banner>
      <div class="nav">
        <cube-scroll :data="project.related_project" direction="horizontal" ref="nav">
          <!-- <nuxt-link :to="{ name: 'project-id-posts', params: { id: project.id, posts: 'all' } }" class="item" exact>全部</nuxt-link> -->
          <nuxt-link :to="{ name: 'project-id-posts', params: { id: project.id, posts: item.id } }" class="item" v-for="item in project.related_project" :key="item.id">{{ item.project_name }}</nuxt-link>
        </cube-scroll>
      </div>
    </header>
    <div class="project-id-posts-content">
      <nuxt-child :data="goodslist" />
    </div>
  </cube-scroll>
</template>

<script>

import Banner from '~/components/index/banner.vue'
import baseTitle from '~/components/baseTitle.vue'

export default {
  layout: 'baseLayout',
  async asyncData ({ app, params }) {
    const project = await app.$axios.$get('appv2_4/bigprojects/' + params.id)
    return {
      project: project.data,
      goodslist: project.data.first_project.object_list
    }
  },
  computed: {
    // 计算横向滚动元素宽度
    itemWidth() {
      let temp = 0;
      this.$refs.nav.$children.forEach((item) => {
        // 计算每个item的宽度
        temp = temp + item.$el.offsetWidth
      })
      return temp + "px";
    }
  },
  methods: {
    async pullingUp () {
      // const goods = await this.$axios.$get('appv2/projectpostslist', {
      //   params: {
      //     cur_page: 1,
      //     page_size: 10,
      //     project_id: this.$route.params.posts
      //   }
      // })
      // console.log('ssss')
    },
    init () {
      this.$router.push({
        name: 'project-id-posts',
        params: {
          id: this.project.id,
          posts: this.project.first_project.project_info.id
        }
      })
    }
  },
  components: {
    Banner, baseTitle
  },
  mounted () {
    this.$refs.nav.$el.children[0].style.width = this.itemWidth;
    this.init()
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .navber {
    .banner-header {
      margin: .4rem;
    }
    .nav {
      height: 1.17rem;
      border-bottom: .0133rem solid #e8e8e8;
      width: 10rem;
      white-space: nowrap;
      .item {
        line-height: 1.17rem;
        .font-dpr(14px);
        padding-right: .4rem;
        padding-left: .4rem;
        display: inline-block;
        &.nuxt-link-active {
          color: #ae2121;
          font-weight: 500;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            height: .0533rem;
            width: .32rem;
            border-radius: .0533rem;
            bottom: .16rem;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            background: #ae2121;
          }
        }
      }
    }
  }
</style>
