<template>
  <section>
    <div class="navbar">
      <div class="container">
        <!-- <a class="logo" href="index.html">Ruben <span>Rao</span></a> -->
        <router-link class="logo" to="/about"
          >Ruben <span>Rao</span></router-link
        >
        <img
          @click="toggleMobileMenu()"
          width="28px"
          height="24px"
          class="mobile-menu svg-decorator"
          src="../assets/openNavigation.svg"
          alt="Open Navigation"
        />
        <nav :class="mobileMenuBar ? 'menu-btn' : ''">
          <img
            @click="toggleMobileMenu()"
            width="28px"
            height="24px"
            class="mobile-menu-exit"
            src="../assets/closeNavigation.svg"
            alt="Close Navigation"
          />
          <ul class="primary-nav">
            <li>
              <router-link to="/about" @click="toggleMobileMenu()"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/portfolio" @click="toggleMobileMenu()"
                >Porfolio</router-link
              >
            </li>
            <li>
              <a
                href="https://rubenrao.com"
                @click="toggleMobileMenu()"
                target="_blank"
                >Blog</a
              >
            </li>
            <li>
              <router-link to="/contact" @click="toggleMobileMenu()"
                >Contact</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuBar: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuBar = !this.mobileMenuBar;
    },
  },
};
</script>

<style lang="scss">
section {
  background: var(--background-color-primary);
}

.svg-decorator {
  filter: var(--svg-color);
}
// :root {
//   --primary-color: #007af3;
// }

// body {
//   // background: #f2f2f2;
//   background-color: var(--background-color-primary);
//   margin: 0px;
//   font-family: 'Poppins';
// }

nav.menu-btn {
  display: block;
  transition: 0.3s;
}

nav {
  position: fixed;
  z-index: 999;
  width: 48%;
  right: 0;
  top: 0;
  background: #20272e;
  height: 100vh;
  padding: 1em;
  display: none;

  ul.primary-nav {
    margin-top: 5em;
    list-style-type: none;
    transition: 0.5s;
  }

  li {
    a {
      color: white;
      text-decoration: none;
      display: block;
      padding: 0.5em;
      font-size: 1.3em;
      // font-weight: 400;
      text-align: right;
      // transition: 0.3s;
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.mobile-menu-exit {
  float: right;
  margin: 0.5 em;
  cursor: pointer;
}

.navbar {
  // background: white;
  padding: 1em;

  .logo {
    text-decoration: none;
    font-weight: 700;
    color: var(--text-primary-color);
    font-size: 1.2em;

    span {
      color: var(--primary-color);
    }
  }

  .container {
    display: flex;
    place-content: space-between;
  }
  .mobile-menu {
    cursor: pointer;
  }
  img {
    width: 1.5em;
    height: auto;
  }
}

@media only screen and (min-width: 768px) {
  .mobile-menu,
  .mobile-menu-exit {
    display: none;
  }

  .navbar .container {
    display: grid;
    grid-template-columns: 180px auto;
    justify-content: unset;
  }

  .navbar nav {
    display: flex;
    justify-content: flex-end;
    background: none;
    position: unset;
    height: auto;
    width: 100%;
    padding: 0;

    ul {
      display: flex;
    }
    a {
      color: var(--text-primary-color);
      font-size: 1em;
      padding: 0.1em 1em;
    }
    ul.primary-nav {
      margin: 0;
    }
  }
}
</style>
