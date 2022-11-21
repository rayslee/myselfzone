<template>
  <div>
    <h2>{{props}}</h2>
    <button @click="emitChange">click</button>
  </div>

  <br/>
  <slot name="header" />
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'

// 父传子
const props = withDefaults(defineProps<{
      msg: string
      code: number
      success?: boolean
  }>(), {
    success: false
})

// 子传父
const emits = defineEmits<{
  (e: 'change', id: number): void
}>()

const emitChange = () => {
  emits('change', 10)
}
</script>

<style scoped lang="less">
h2 {
  color: #bfa;
}
</style>
