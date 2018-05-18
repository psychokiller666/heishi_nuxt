<template>
  <baseGuessLike :data="goods.result" />
</template>

<script>
import baseGuessLike from '~/components/baseGuessLike.vue'

export default {
  async asyncData ({ app, params }) {
    if (params.tag === undefined) {
      const goods = await app.$axios.$get('appv3/category/posts', {
        params: {
          category_id: params.id,
          cur_page: 1
        }
      })
      return {
        goods: goods.data.data.item_list
      }
    } else {
      const goods = await app.$axios.$get('appv3/tag/posts', {
        params: {
          category_id: params.id,
          cur_page: 1,
          tag: params.tag
        }
      })
      return {
        goods: goods.data.data.item_list
      }

    }
  },
  components: {
    baseGuessLike
  }
}
</script>
