<template>
  <navigation-menu></navigation-menu>
  <main>
    <router-view v-slot="slotProps" mode="out-in">
      <transition name="route">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
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

  .route-enter-from,
  .route-leave-to {
    opacity: 0;
  }

  .route-enter-active {
    transition: opacity 0.7s ease-out;
  }

  .route-leave-active {
    transition: opacity 0.1s ease-in;
  }

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
  }

  // .route-enter-from {
  // }
  // .route-enter-active {
  //   animation: slide-scale 0.4s ease-out;
  // }
  // .route-enter-to {
  // }

  // .route-leave-active {
  //   animation: slide-scale 0.4s ease-in;
  // }

  // @keyframes slide-scale {
  //   0% {
  //     transform: translateX(0) scale(1);
  //   }

  //   70% {
  //     transform: translateX(-120px) scale(1.1);
  //   }

  //   100% {
  //     transform: translateX(-150px) scale(1);
  //   }
  // }
}
</style>
