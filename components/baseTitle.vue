<template>
  <div class="header" slot="header">
    <div class="title">{{ title }}</div>
    <div class="label" v-show="label">{{ label }}</div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: '还没有写标题'
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';

.header {
  margin-bottom: .4rem;
  .title {
    line-height: 1em;
    .font-dpr(18px);
    font-weight: 700;
  }
  .label {
    line-height: 1em;
    .font-dpr(12px);
    color: #8E8E8E;
    margin-top: .16rem;
  }
}
</style>
