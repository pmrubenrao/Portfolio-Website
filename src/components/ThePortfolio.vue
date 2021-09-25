<template>
  <section class="pf-main-header">
    <div class="container">
      <h1>Professional experience</h1>
    </div>
  </section>
  <section class="header-layout">
    <div class="container">
      <h1 class="header-layout-patch">Backend Developer @Tech Mahindra</h1>
    </div>
  </section>
  <section class="pf-exp ">
    <div class="container">
      <!-- <h1 class="pf-profile-header">Backend Developer @Tech Mahindra</h1> -->
      <div class="pf-summary">
        <div>
          Its an video streaming web site just like YouTube in which user can
          watch and upload their videos. It is completely developed inside the
          AWS cloud and uses serverless services like AWS Lambda, API Gateway,
          DynamoDB, SNS & OAuth3.0.
        </div>
      </div>
      <the-sub-header sub-header-data="TECH STACK"></the-sub-header>
      <the-list skills-data="techStackData"></the-list>

      <div class="pf-roles-header">Role and challenges:</div>
      <li class="tech-stack-list ">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </li>
      <li class="tech-stack-list ">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </li>
      <li class="tech-stack-list ">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </li>
      <li class="tech-stack-list ">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </li>
    </div>
  </section>
</template>

<script>
import TheSubHeader from './TheSubHeader.vue';
import TheList from './TheList.vue';
export default {
  components: { TheSubHeader, TheList },
};
</script>

<style lang="scss" scoped>
section {
  /* margin: 0 1rem 0 1rem; */
  // padding: 1em 2em 1em 2em;
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
  // list-style-type: none;
}

.header-layout {
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .header-layout-patch {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 1rem 0;
      letter-spacing: 0.2rem;
      border-bottom: 0.2rem solid var(--primary-color);
    }
  }
}
section.pf-main-header {
  max-width: 47.5em;
  margin: 0 auto 0 auto;
  padding: 5em 2em 1em 2em;
  .container {
    h1 {
      text-transform: uppercase;
      font-size: 2.5em;
      margin-top: 0.2em;
    }
  }
}

section.pf-exp {
  // max-width: 47.5em;
  // margin: 0 auto 0 auto;
  padding: 1em 2em 3em 2em;
  // background: var(--primary-color);
  color: rgb(15, 15, 15);
  // li {
  //   line-height: 4rem;
  // }
  .pf-summary {
    display: flex;
    align-items: flex-start;
    flex: 0 0 45%;
    padding: 0 0 1em 0;
    // margin-bottom: 0.5rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .pf-profile-header {
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    margin: 1rem 0;
    letter-spacing: 0.2rem;
    border-bottom: 0.2rem solid var(--primary-color);
  }
  .pf-roles-header {
    display: flex;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    margin: 1rem 0;
    letter-spacing: 0.2rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
}

.tech-stack {
  .container {
    // margin: 0rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 0.5rem;

    // background: #20272e;
    // padding: 0 0 1.5em 0;
    .tech-stack-list {
      // display: flex;
      // align-items: center;
      // flex: 0 0 45%;
      margin-bottom: 0.5rem;
      justify-content: space-between;
      li {
        list-style-type: circle;
      }
    }
    .tech-stack-header {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 1rem 0;
      letter-spacing: 0.2rem;
    }
  }
}
</style>
