<template>
  <div>
    <about-me></about-me>
    <generic-list header-list="header-layout-patch"></generic-list>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import GenericList from '../components/GenericList.vue';
export default {
  components: {
    AboutMe,
    GenericList,
  },
};
</script>
