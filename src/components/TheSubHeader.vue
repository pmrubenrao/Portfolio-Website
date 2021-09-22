<template>
  <li class="sub-header">
    {{ subHeaderData }}
  </li>
  <!-- <slot></slot> -->
</template>

<script>
export default {
  props: ['subHeaderData'],
};
</script>

<style lang="scss" scoped>
.sub-header {
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  margin: 1rem 0;
  letter-spacing: 0.2rem;
}
</style>
