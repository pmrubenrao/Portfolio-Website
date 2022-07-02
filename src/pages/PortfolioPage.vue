<template>
  <div>
    <section class="pf-main-header">
      <div class="container">
        <h1>Professional experience</h1>
      </div>
    </section>

    <section class="header-layout">
      <div class="container">
        <h1 class="header-layout-patch">Full-Stack Developer @Deutsche bank</h1>

        <!-- <section class="pf-exp"> -->
        <!-- <div>
        Explaination of DB project
      </div> -->

        <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
        <the-list skills-data="backendstack"></the-list>

        <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
        <the-list skills-data="rcDeutscheBank" rolesData="roles"></the-list>
        <!-- </section> -->
      </div>
    </section>

    <section class="header-layout">
      <div class="container">
        <h1 class="header-layout-patch">Full-Stack Developer @Tech Mahindra</h1>

        <!-- <section class="pf-exp"> -->
        <!-- <div>
        Explaination of TechM project
      </div> -->

        <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
        <the-list skills-data="frontendstack"></the-list>

        <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
        <the-list skills-data="rcTechM" rolesData="roles"></the-list>
        <!-- </section> -->
      </div>
    </section>

    <section class="header-layout">
      <div class="container">
        <h1 class="header-layout-patch">DevOps Engineer @Amdocs DVCI</h1>

        <!-- <section class="pf-exp"> -->
        <!-- <div>
        Explaination of Amdocs project
      </div> -->
        <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
        <the-list skills-data="devOpsStack"></the-list>

        <the-sub-header sub-header-data="ROLE AND CHALLENGES:"></the-sub-header>
        <the-list skills-data="rcAmdocs" rolesData="roles"></the-list>
        <!-- </section> -->
      </div>
    </section>
    <section><br /><br /><br /></section>
  </div>
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
  padding: 0em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
}

section.pf-main-header {
  .container {
    h1 {
      text-transform: uppercase;
      font-size: 2.5em;
      padding: 0.5em 0em 0em;
      margin: 0;
    }
  }
}
</style>
