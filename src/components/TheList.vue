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
  // techStackData,
} from '../../persistentData/skill_details.js';
import {
  rcDeutscheBankData,
  rcTechMData,
  rcAmdocsData,
} from '../../persistentData/rolesChallenges.js';

export default {
  props: ['skillsData'],
  data() {
    return {
      selector: [],
      backendSkill: frontendData,
      frontendSkill: backendData,
      currentLearning: learningData,
      rcDeutscheBank: rcDeutscheBankData,
      rcTechM: rcTechMData,
      rcAmdocs: rcAmdocsData,
    };
  },
  mounted() {
    if (this.skillsData === 'backendstack') {
      this.selector = this.backendSkill;
    } else if (this.skillsData === 'frontendstack') {
      this.selector = this.frontendSkill;
    } else if (this.skillsData === 'learning') {
      this.selector = this.currentLearning;
    } else if (this.skillsData === 'rcDeutscheBank') {
      this.selector = this.rcDeutscheBank;
    } else if (this.skillsData === 'rcTechM') {
      this.selector = this.rcTechM;
    } else if (this.skillsData === 'rcAmdocs') {
      this.selector = this.rcAmdocs;
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
