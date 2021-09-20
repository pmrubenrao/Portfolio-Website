<template>
  <section class="skill-set">
    <div class="container">
      <h1 :class="headerList">SKILLS</h1>

      <div :class="subHeaderList">Backend Stack</div>
      <div :class="plainList">Node js</div>
      <div :class="plainList">AWS lambda functions</div>
      <div :class="plainList">API Gateway</div>
      <div :class="plainList">GraphQL</div>
      <div :class="plainList">Google Firestore</div>

      <div :class="subHeaderList">Frontend Stack</div>
      <div :class="plainList">Vue js</div>
      <div :class="plainList">ECMAScript 6/Babel</div>
      <div :class="plainList">HTML5/CSS3/SASS</div>
      <div :class="plainList">GraphQL</div>

      <h1 :class="headerList">What i'm Learning</h1>

      <div :class="plainList">Block Chain</div>
      <div :class="plainList">Python 3</div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['headerList', 'subHeaderList', 'plainList'],
  data() {
    return {
      dummy: '',
    };
  },
  // methods: {
  //   classReceiver(classname) {
  //     return this.classname;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
section {
  /* margin: 0 1rem 0 1rem; */
  // padding: 1em 2em 1em 2em;
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
}

.skill-set {
  .container {
    // margin: 0rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // background: #20272e;
    // padding: 0 0 1.5em 0;
    .skill {
      display: flex;
      align-items: center;
      flex: 0 0 45%;
      margin-bottom: 0.5rem;
      justify-content: space-between;
    }
    .skill-header {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 1rem 0;
      letter-spacing: 0.2rem;
      border-bottom: 0.2rem solid var(--primary-color);
    }
    .skill-sub-header {
      font-weight: 700;
      text-transform: uppercase;
      width: 100%;
      margin: 1rem 0;
      letter-spacing: 0.2rem;
    }
  }
}
</style>
