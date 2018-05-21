<template>
  <baseGuessLike :data="data" />
</template>

<script>
import baseGuessLike from '~/components/baseGuessLike.vue'

export default {
  props: ['data'],
  components: {
    baseGuessLike
  }
}
</script>
