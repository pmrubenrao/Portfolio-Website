<template>
  <section class="skill-set">
    <div class="container">
      <!-- SKILLS -->
      <h1 :class="headerList">SKILLS</h1>
      <the-sub-header sub-header-data="BACKEND STACK"></the-sub-header>
      <the-list skills-data="backendstack"></the-list>
      <the-sub-header sub-header-data="FRONTEND STACK"></the-sub-header>
      <the-list skills-data="frontendstack"></the-list>

      <!-- LEARNING -->
      <h1 :class="headerList">WHAT I'M LEARNING</h1>
      <the-list skills-data="learning"></the-list>

      <!-- BLOG POST  -->
      <h1 :class="headerList">BLOG POST</h1>
    </div>
  </section>
</template>

<script>
import TheList from './TheList.vue';
import TheSubHeader from './TheSubHeader.vue';
export default {
  components: { TheList, TheSubHeader },
  props: ['headerList'],
  data() {
    return {
      skillsData: [
        'Nodejs',
        'AWS lambda functions',
        'API Gateway',
        'GraphQL',
        'Google Firestore',
      ],
      subHeaderListData: [
        'Backend Stack',
        'Frontend Stack',
        "What i'm Learning",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  /* margin: 0 1rem 0 1rem; */
  // padding: 1em 2em 1em 2em;
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
  list-style-type: none;
}

.skill-set {
  .container {
    // margin: 0rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // background: #20272e;
    // padding: 0 0 1.5em 0;
    // .skill {
    //   display: flex;
    //   align-items: center;
    //   flex: 0 0 45%;
    //   margin-bottom: 0.5rem;
    //   justify-content: space-between;
    // }
    .skill-header {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 1rem 0;
      letter-spacing: 0.2rem;
      border-bottom: 0.2rem solid var(--primary-color);
    }
    // .skill-sub-header {
    //   font-weight: 700;
    //   text-transform: uppercase;
    //   width: 100%;
    //   margin: 1rem 0;
    //   letter-spacing: 0.2rem;
    // }
  }
}
</style>
