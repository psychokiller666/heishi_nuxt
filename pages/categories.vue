<template>
  <div class="index-categorie">
    <navber />
    <nuxt-child class="categorie-content" />
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
