<template>
  <navigation-menu></navigation-menu>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  components: {
    'navigation-menu': NavigationMenu,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

#app {
  font-family: Poppins;

  :root {
    --primary-color: #007af3;
  }

  body {
    background: #f2f2f2;
    margin: 0px;
    font-family: 'Poppins';
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
}
</style>
