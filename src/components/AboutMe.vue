<template>
  <section class="about">
    <div class="container">
      <p class="subhead">Hi, this is Ruben Rao</p>
      <h1>I am Full-Stack developer</h1>
      <p>
        Hi! My name is Ruben and I've been working as a backend developer for
        over 6 years mostly on the Telecomm domain. During my journey, I am
        lucky enough to get the opportunity to work on projects that require the
        setting up of the infrastructure on the cloud provider like Amazon Web
        Services.
        <br />
        <br />
        I am a strong believer in the concept of
        <strong>“giving back to the community”</strong>. All the things you
        experienced throughout your career should be shared with your community
        and the best way to do it is by logging your experiences in form of a
        personal blog or other channels like medium or StackOverflow, which
        builds a good online presence that showcases your work and efforts.
        <br />
        <br />
        In my free time, I love playing famous song arpeggios on guitar, you can
        watch those on my
        <a href="https://www.instagram.com/ruben_rao/">Instagram</a> profile.
      </p>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  padding: 0em 2em 0em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
}

.about {
  display: flex;
  justify-content: center;
  .subhead {
    color: gray;
    letter-spacing: 0.3em;
  }

  .container h1 {
    text-transform: uppercase;
    font-size: 2.5em;
    margin-top: 0.2em;
  }
  a {
    padding: 0 0 1em 0;
    // font-size: 1.17em;
    color: var(--background-color-secondary);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
