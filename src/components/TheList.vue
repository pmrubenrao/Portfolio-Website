<template>
  <li v-for="skill in selector" :key="skill" class="list-layout">
    {{ skill }}
  </li>
</template>

<script>
import {
  frontendData,
  backendData,
  learningData,
  techStackData,
} from '../../persistentData/skill_details.js';
export default {
  props: ['skillsData'],
  data() {
    return {
      selector: [],
      backendSkill: frontendData,
      frontendSkill: backendData,
      currentLearning: learningData,
      techStack: techStackData,
    };
  },
  mounted() {
    if (this.skillsData === 'backendstack') {
      this.selector = this.backendSkill;
    } else if (this.skillsData === 'frontendstack') {
      this.selector = this.frontendSkill;
    } else if (this.skillsData === 'learning') {
      this.selector = this.currentLearning;
    } else {
      this.selector = this.techStack;
    }
  },
};
</script>

<style lang="scss" scoped>
.list-layout {
  display: flex;
  align-items: center;
  flex: 0 0 45%;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  justify-content: space-between;
}
</style>
