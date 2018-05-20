<template>
  <div class="error" style="display: flex; flex-wrap: wrap;">
    <div class="item" style="width: 10rem; text-align: center;" v-if="error.statusCode === 404">
      <img class="image" style="width: 10rem; margin-top: 1rem;" v-lazy="'//img8.ontheroadstore.com/upload/180519/34c7c7c72e1b49ab83cff72148b898a1.png'" />
      <nuxt-link to="/"><img class="image" style="width: 5rem; margin-top: 1rem;" v-lazy="'//img8.ontheroadstore.com/upload/180519/3279c578dabe18eaeda6985222833615.png'" /></nuxt-link>
    </div>
    <div class="item" style="width: 10rem;text-align: center;" v-else>
      <!-- <div cl -->
      <span>傻逼后端又几把出错了</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'baseLayout'
}
</script>
