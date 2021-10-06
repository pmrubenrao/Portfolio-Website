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
    // // --primary: #555bff;
    // --secondary: #22d2a0;
    // --background: white;
    // --green: #1fc11b;
    // --yellow: #ffd913;
    // --orange: #ff9c55;
    // --red: #ff5555;
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
