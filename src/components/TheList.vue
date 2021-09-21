<template>
  <!-- <the-sub-header> -->
  <li v-for="skill in selector" :key="skill" class="skill">
    {{ skill }}
  </li>
  <!-- </the-sub-header> -->
</template>

<script>
export default {
  props: ['skillsData'],
  data() {
    return {
      selector: [],
      backendSkill: [
        'Nodejs',
        'AWS lambda functions',
        'API Gateway',
        'GraphQL',
        'Google Firestore',
      ],
      frontendSkill: [
        'Vue Js',
        'ECMAScript 6/Babel',
        'HTML5/CSS3/SCSS',
        'GraphQL',
      ],
      currentLearning: ['Block Chain / Crypto Currency', 'Python3'],
    };
  },
  mounted() {
    if (this.skillsData === 'backendstack') {
      this.selector = this.backendSkill;
    } else if (this.skillsData === 'frontendstack') {
      this.selector = this.frontendSkill;
    } else {
      this.selector = this.currentLearning;
    }
  },
};
</script>

<style lang="scss" scoped>
.skill {
  display: flex;
  align-items: center;
  flex: 0 0 45%;
  margin-bottom: 0.5rem;
  justify-content: space-between;
}
</style>
