<template>
  <div>
    购物车
  </div>
</template>

<script>
export default {
  async asyncData ({app}) {
    const cart = await app.$axios.$get('appv4/getcart')
    console.log(cart)
  }
}
</script>
