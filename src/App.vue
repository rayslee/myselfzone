<template>
<Header></Header>

<div class="posts">
  <Post></Post>
  <Post></Post>
  <Post></Post>
  <Post></Post>
  <Post></Post>
  <Post></Post>
  <Post></Post>
</div>

<Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Post from '@/components/Post.vue'
</script>

<style lang="less" scoped>
.posts {
  height: 86vh;
  overflow-y: scroll;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.posts::-webkit-scrollbar {
    display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.posts {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
