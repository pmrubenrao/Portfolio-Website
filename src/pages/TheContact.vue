<template>
  <section class="pf-main-header">
    <div class="container">
      <h1>Contact Me</h1>
      <div class="referencelink">
        <a href="https://github.com/pmrubenrao"
          ><img alt="#" src="../assets/github.svg"
        /></a>
        <a href="https://stackoverflow.com/users/5692366/ruben"
          ><img alt="#" src="../assets/stackoverflow.svg"
        /></a>
        <a href="mailto:pmrubenrao1010@gmail.com"
          ><img alt="#" src="../assets/gmail.svg"
        /></a>
        <a href="https://www.instagram.com/ruben_rao/"
          ><img alt="#" src="../assets/instagram.svg"
        /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 1em 2em;
  max-width: 60em;
  margin: 0 auto 0 auto;
}

section.pf-main-header {
  padding: 10em;
  .container {
    h1 {
      text-transform: uppercase;
      font-size: 3em;
      padding: 1em 0em 0em;
      margin: 0;
      text-align: center;
    }
    .referencelink {
      margin: 1em;
      text-align: center;
      img {
        width: 100%;
        padding: 2em;
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
