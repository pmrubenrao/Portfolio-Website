<template>
  <about-me></about-me>
  <generic-list header-list="header-layout-patch"></generic-list>
</template>

<script>
import AboutMe from './AboutMe.vue';
import GenericList from './GenericList.vue';
export default {
  components: {
    // 'navigation-menu': NavigationMenu,
    AboutMe,
    GenericList,
  },
};
</script>
