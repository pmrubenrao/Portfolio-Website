<template>
  <div
    v-for="blogDetail in blogDetails"
    :key="blogDetail.title"
    class="blog-layout"
  >
    <a :href="blogDetail.link">{{ blogDetail.title }}</a>
    <small>{{ blogDetail.date }}</small>
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
.blog-layout {
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
    color: var(--background-color-secondary);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
