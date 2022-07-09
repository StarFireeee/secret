<template>
  <div class="box">
    <p>{{ name }}</p>
    <p>HP：{{ HP }}</p>
    <p>MP：{{ MP }}</p>
    <p>攻击：{{ attack }}</p>
    <p>防御：{{ defense }}</p>
    <p>速度：{{ speed }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'AttributeTemplate',
  setup() {
    const date = reactive({
      name: '士兵',
      HP: 100,
      MP: 50,
      attack: 20,
      defense: 5,
      speed: 2,
    })

    return {
      ...date,
    }
  },
})
</script>

<style lang="less" scoped></style>
