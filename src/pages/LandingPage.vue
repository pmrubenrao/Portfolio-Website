<template>
  <div>
    <about-me></about-me>
    <skills-list header-list="header-layout-patch"></skills-list>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import SkillsList from '../components/SkillsList.vue';
export default {
  components: {
    AboutMe,
    SkillsList,
  },
};
</script>
