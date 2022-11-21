<template>
  <HelloWorld msg="Hello From App" :code=12 @change="change">
    <!-- 插槽 -->
    <template #header>
      Slot from App
    </template>
  </HelloWorld>

  <!-- 路由 -->
  <br/><br/><br/>
  <router-link to="/">Home</router-link> | 
  <router-link to="/about">About</router-link>
  <router-view/>

  <!-- vuex modules -->
  <br/><br/><br/>
  <div>
    当前 vuex count 的求和为：{{countState.sum}}，放大十倍为{{bigSum}}
    <br/>
    学校：{{countState.school}}
    <br/>
    <button @click="increment">点我+1</button>
    <button @click="incrementOdd">点我奇数+1</button>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { computed } from 'vue';
import { useStore } from 'vuex'

function change(id: number) {
  alert(id)
}

const store = useStore()
// state
const countState = store.state.count
// getters
const bigSum = computed(()=>{
  return store.getters['count/bigSum']
})
// mutations
function increment() {
  store.commit('count/INCREMENT', 1)
}
// actions
function incrementOdd() {
  store.dispatch('count/incrementOdd', 1)
}
</script>

<style lang="less" scoped>

</style>
