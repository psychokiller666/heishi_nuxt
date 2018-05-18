<template>
  <div class="index-categorie">
    <navber />
    <nuxt class="categorie-content"></nuxt>
  </div>
</template>

<script>
import navber from '~/components/categories/navber.vue'

export default {
  layout: 'categoriesLayout',
  components: {
    navber
  }
}
</script>
