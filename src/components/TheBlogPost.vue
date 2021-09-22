<template>
  <div
    v-for="blogDetail in blogDetails"
    :key="blogDetail.title"
    class="blog-section"
  >
    <a href="https://serverless.world/videohost.html">{{ blogDetail.title }}</a>
    <small>Sun August 30 2020 • 7 min read</small>
    <div>{{ blogDetail.description }}</div>
  </div>
</template>

<script>
import blogData from '../../persistentData/blog_details.js';
export default {
  data() {
    return {
      blogDetails: blogData,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-section {
  display: flex;
  align-items: flex-start;
  flex: 0 0 45%;
  padding: 0 0 1em 0;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    padding: 0 0 1em 0;
    font-size: 1.17em;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
