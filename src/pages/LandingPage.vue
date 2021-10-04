<template>
  <about-me></about-me>
  <generic-list header-list="header-layout-patch"></generic-list>
  <!-- <the-blog-post></the-blog-post> -->
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import GenericList from '../components/GenericList.vue';
// import TheBlogPost from '../components/TheBlogPost.vue';
export default {
  components: {
    AboutMe,
    GenericList,
    // TheBlogPost,
  },
};
</script>
