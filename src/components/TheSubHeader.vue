<template>
  <li class="skill-sub-header">
    {{ subHeaderData }}
  </li>
  <!-- <slot></slot> -->
</template>

<script>
export default {
  props: ['subHeaderData'],
  data() {
    return {
      //   subHeaderListData: [
      //     'Backend Stack',
      //     'Frontend Stack',
      //     "What i'm Learning",
      //   ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skill-sub-header {
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  margin: 1rem 0;
  letter-spacing: 0.2rem;
}
</style>
