<template>
  <section class="pf-main-header">
    <div class="container">
      <h1>Professional experience</h1>
    </div>
  </section>

  <section class="header-layout">
    <div class="container">
      <h1 class="header-layout-patch">Backend Developer @Deutsche bank</h1>
    </div>
  </section>

  <section class="pf-exp">
    <div class="container">
      <div>
        Explaination of DB project
      </div>
    </div>
    <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
    <the-list skills-data="backendstack"></the-list>

    <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
    <the-list skills-data="rcDeutscheBank"></the-list>
  </section>

  <section class="header-layout">
    <div class="container">
      <h1 class="header-layout-patch">Frontend Developer @Tech Mahindra</h1>
    </div>
  </section>

  <section class="pf-exp">
    <div class="container">
      <div>
        Explaination of TechM project
      </div>
    </div>
    <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
    <the-list skills-data="frontendstack"></the-list>

    <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
    <the-list skills-data="rcTechM"></the-list>
  </section>

  <section class="header-layout">
    <div class="container">
      <h1 class="header-layout-patch">DevOps Engineer @Amdocs DVCI</h1>
    </div>
  </section>

  <section class="pf-exp">
    <div class="container">
      <div>
        Explaination of Amdocs project
      </div>
    </div>
    <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
    <the-list skills-data="frontendstack"></the-list>

    <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
    <the-list skills-data="rcAmdocs"></the-list>
  </section>
</template>

<script>
import TheSubHeader from '../components/TheSubHeader.vue';
import TheList from '../components/TheList.vue';
export default {
  components: { TheSubHeader, TheList },
};
</script>

<style lang="scss" scoped>
section {
  //   /* margin: 0 1rem 0 1rem; */
  //   // padding: 1em 2em 1em 2em;
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
  //   // list-style-type: none;
}

.header-layout {
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 0em;
    .header-layout-patch {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 0rem 0;
      letter-spacing: 0.2rem;
      border-bottom: 0.2rem solid var(--primary-color);
    }
  }
}
section.pf-main-header {
  .container {
    h1 {
      text-transform: uppercase;
      font-size: 2.5em;
      margin-top: 1.2em;
    }
  }
}
</style>
