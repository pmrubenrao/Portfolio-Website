<template>
  <section class="header-layout">
    <div class="container">
      <!-- SKILLS -->
      <h1 :class="headerList">SKILLS</h1>
      <the-sub-header sub-header-data="BACKEND STACK"></the-sub-header>
      <the-list skills-data="backendstack"></the-list>
      <the-sub-header sub-header-data="FRONTEND STACK"></the-sub-header>
      <the-list skills-data="frontendstack"></the-list>

      <!-- LEARNING -->
      <h1 :class="headerList">WHAT I'M LEARNING</h1>
      <the-list skills-data="learning"></the-list>
    </div>
  </section>

  <!-- BLOG POST  -->
  <section class="header-layout">
    <div class="container">
      <h1 :class="headerList">BLOG POST</h1>
    </div>
    <blog-post></blog-post>
  </section>
</template>

<script>
import TheList from './TheList.vue';
import TheSubHeader from './TheSubHeader.vue';
import BlogPost from './BlogPost.vue';
export default {
  components: { TheList, TheSubHeader, BlogPost },
  props: ['headerList'],
};
</script>

<style lang="scss" scoped>
section {
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
  // list-style-type: none;
}
</style>
