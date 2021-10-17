<template>
  <about-me></about-me>
  <generic-list header-list="header-layout-patch"></generic-list>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import GenericList from '../components/GenericList.vue';
export default {
  components: {
    AboutMe,
    GenericList,
    // TheBlogPost,
  },
};
</script>

<style>
body {
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
