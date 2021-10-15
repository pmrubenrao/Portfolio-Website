<template>
  <template v-if="rolesData === 'roles'" class="list-roles-layout">
    <ul>
      <li v-for="skill in selector" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </template>

  <template v-else>
    <li v-for="skill in selector" :key="skill" class="list-layout">
      {{ skill }}
    </li>
  </template>
</template>

<script>
import {
  frontendData,
  backendData,
  learningData,
  devOpsData,
} from '../../persistentData/skill_details.js';
import {
  rcDeutscheBankData,
  rcTechMData,
  rcAmdocsData,
} from '../../persistentData/rolesChallenges.js';

export default {
  props: ['skillsData', 'rolesData'],
  data() {
    return {
      selector: [],
      backendSkill: frontendData,
      frontendSkill: backendData,
      currentLearning: learningData,
      devops: devOpsData,
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
    } else if (this.skillsData === 'devOpsStack') {
      this.selector = this.devops;
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
ul {
  margin: 0;
  padding-inline-start: 1em;
  // padding-bottom: 10em;
  .list-roles-layout {
    padding-inline: 10rem;
  }
}
.list-layout {
  display: list-item;
  align-items: center;
  flex: 0 0 45%;
  margin-left: 0;
  margin-bottom: 0.5rem;
  // padding-left: 1rem;
  justify-content: space-between;
  vertical-align: text-bottom;
  list-style-type: none;
}
</style>
