<template>
  <div class="card">
    <p>Contact Me</p>

    <a href="https://www.linkedin.com/in/ruben-rao-737a241ba/"
      ><img class="icon" src="../assets/linkedin.png" alt="linkedIn"
    /></a>
    <a href="https://github.com/pmrubenrao"
      ><img class="icon" src="../assets/github.png" alt="github"
    /></a>
    <a href="https://www.instagram.com/ruben_rao/"
      ><img class="icon" src="../assets/instagram.png" alt="instagram"
    /></a>
    <a href="mailto:pmrubenrao@gmail.com"
      ><img class="icon" src="../assets/mail.png" alt="mail"
    /></a>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --primary: #555bff;
  --secondary: #22d2a0;
  --background: white;
  --green: #1fc11b;
  --yellow: #ffd913;
  --orange: #ff9c55;
  --red: #ff5555;
}
.card {
  background-color: var(--background);
  display: block;
  width: 300px;
  min-height: 90px;
  border: 3px solid var(--primary);
  padding: 15px;
  margin: calc(55vh - 100px) auto 0 auto;
  box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
    20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
    30px -30px 0 -3px var(--background), 30px -30px var(--orange),
    40px -40px 0 -3px var(--background), 40px -40px var(--red);
  transition: box-shadow 1s, top 1s, left 1s;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
}

.card:hover {
  top: -40px;
  left: 40px;
  box-shadow: 0 0 0 -3px var(--background), 0 0 0 0 var(--green),
    0 0 0 -3px var(--background), 0 0 0 0 var(--yellow),
    0 0 0 -3px var(--background), 0 0 0 0 var(--orange),
    0 0 0 -3px var(--background), 0 0 0 0 var(--red);
}

.card p {
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.card .icon {
  position: relative;
  padding: 1em 1em;
  /* Adjust these values accordingly */
  top: 15px;
  left: 1em;
  // right: 10em;
  width: 20%;
  height: auto;
  cursor: pointer;
}
</style>
