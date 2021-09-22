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
} from '../../persistentData/skill_details.js';
export default {
  props: ['skillsData'],
  data() {
    return {
      selector: [],
      backendSkill: frontendData,
      frontendSkill: backendData,
      currentLearning: learningData,
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
.list-layout {
  display: flex;
  align-items: center;
  flex: 0 0 45%;
  margin-bottom: 0.5rem;
  justify-content: space-between;
}
</style>
