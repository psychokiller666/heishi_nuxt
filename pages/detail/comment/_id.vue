<template>
  <cube-scroll :data="comment.comments" @pulling-up="getCommentList" ref="scroll" :options="options">
    <comment :data="comment.comments" :child="true" />
  </cube-scroll>
</template>

<script>
import comment from '~/components/article/comment.vue'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  async asyncData ({app, params}) {
    const res = await app.$axios.$get('appv1/itemcomment', {
      params: {
        cur_page: 1,
        item_id: params.id,
        page_size: 20,
        mask: 0
      }
    })
    return {
      comment: res.data
    }
  },
  layout: 'baseLayout',
  data () {
    return {
      options: {
        pullUpLoad: true,
      },
      commentlistpage: 2
    }
  },
  methods: {
    async getCommentList() {
      await this.$axios.$get('appv1/itemcomment', {
        params: {
          cur_page: this.commentlistpage,
          item_id: this.$route.params.id,
          page_size: 20,
          mask: 0
        }
      }).then(res => {
        if (res.data.total_count != this.commentlistpage) {
          this.comment.comments = this.comment.comments.concat(res.data.comments)
          this.commentlistpage = this.commentlistpage + 1
        } else {
          this.$refs.scroll.forceUpdate()
        }
      })
    }
  },
  components: {
    comment
  }
}
</script>

<style lang="less" scoped>
  @import '../../../assets/less/common.less';


</style>
