<template>
  <twoColPostsList :data="resgoodslist" />
</template>

<script>
import twoColPostsList from '~/components/twoColPostsList.vue'

export default {
  async asyncData ({ app, params }) {
    const goods = await app.$axios.$get('appv2/projectpostslist', {
      params: {
        cur_page: 1,
        page_size: 10,
        project_id: params.posts
      }
    })
    return {
      resgoodslist: goods.data.object_list
    }
  },
  props: ['data'],
  computed: {
    goodslist () {
      // console.log(this.data)
      return []
    }
  },
  components: {
    twoColPostsList
  }
}
</script>
