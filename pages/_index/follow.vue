<template>
  <div>
    关注
  </div>
</template>

<script>
export default {
  props: {
    banner_item: {
      type: Array,
      default: () => {
        return [
          {
            id: '1',
            'title': '关注的狠货'
          }
        ]
      }
    }
  }
}
</script>
