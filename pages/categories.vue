<template>
  <cube-index-list :data="cityData">
    <cube-index-list-group
      v-for="(group, index) in cityData"
      :key="index"
      :group="group">
      <cube-index-list-item
        v-for="(item, index) in group.items"
        :key="index"
        :item="item"
        @select="selectItem">
        <div class="custom-item">我是自定义 {{item.name}}</div>
      </cube-index-list-item>
    </cube-index-list-group>
  </cube-index-list>
</template>

<script>
// https://warpcgd.github.io/vue-tantan-stack/
// 动画效果
// https://github.com/warpcgd/vue-tantan-stack/blob/v2.0/src/components/stack.vue
const cityData = [
  {
    "name": "★Hot City",
    "items": [
      {
        "name": "BEIJING",
        "value": 1
      },
      {
        "name": "SHANGHAI",
        "value": 2
      }
    ]
  },
  {
    "name": "A",
    "items": [
      {
        "name": "ANSHAN",
        "value": 3
      },
      {
        "name": "ANQING",
        "value": 4
      }
    ]
  }
]

export default {
  data() {
    return {
      title: 'Current City: BEIJING',
      cityData: cityData
    }
  },
  methods: {
    selectItem(item) {
      console.log(item.name)
    },
    clickTitle(title) {
      console.log(title)
    }
  }
}
</script>
