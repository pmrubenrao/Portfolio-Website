<template>
  <div>
    <section class="pf-main-header">
      <div class="container">
        <h1>Reach Me :</h1>
        <div class="referencelink">
          <a href="https://github.com/pmrubenrao" target="_blank"
            ><img class="svg-decorator" alt="#" src="../assets/github.svg"
          /></a>
          <a
            href="https://stackoverflow.com/users/5692366/ruben"
            target="_blank"
            ><img
              class="svg-decorator"
              alt="#"
              src="../assets/stackoverflow.svg"
          /></a>
          <a href="mailto:pmrubenrao1010@gmail.com" target="_blank"
            ><img class="svg-decorator" alt="#" src="../assets/gmail.svg"
          /></a>
          <a href="https://www.linkedin.com/in/ruben-rao" target="_blank"
            ><img class="svg-decorator" alt="#" src="../assets/linkedin.svg"
          /></a>
          <a href="https://www.instagram.com/ruben_rao/" target="_blank"
            ><img class="svg-decorator" alt="#" src="../assets/instagram.svg"
          /></a>
        </div>
      </div>

      <div class="wrap">
        <a href="https://bit.ly/3j7FIUQ" target="_blank" class="btn-slide">
          <span class="circle"><i class="fa fa-rocket"></i></span>
          <span class="title">Download Resume</span>
          <span class="title-hover">Click here</span>
        </a>
        <a href="https://bit.ly/3n4VBMG" target="_blank" class="btn-slide">
          <span class="circle"><i class="fa fa-rocket"></i></span>
          <span class="title"> Resume Template</span>
          <span class="title-hover">Click here</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://bit.ly/3j7FIUQ',
      isActive: false,
    };
  },
};
</script>
<style lang="scss" scoped>
section {
  padding: 1em 2em;
  max-width: 47.5em;
  margin: 0 auto 0 auto;
}
.svg-decorator {
  filter: var(--svg-color);
}
section.pf-main-header {
  // padding: 10em;
  .container {
    h1 {
      text-transform: uppercase;
      font-size: 3em;
      padding: 1em 0em 0em;
      margin: 0;
      text-align: center;
    }
    .referencelink {
      // margin: 1em;
      text-align: center;
      img {
        width: 100%;
        padding: 1em;
        width: 120px;
        height: 120px;
      }
    }
  }
  // body {
  //   margin: 50px;
  //   font-family: helvetica, sans-serif;
  //   background: #e9f0f4;
  // }

  .wrap {
    margin: 20px auto;
    text-align: center;
  }

  .btn-slide {
    position: relative;
    display: inline-block;
    height: 50px;
    width: 240px;
    line-height: 50px;
    padding: 0;
    border-radius: 5em;
    background: #fdfdfd;
    border: 4px solid #000000;
    margin: 10px;
    transition: 0.5s;
  }

  .btn-slide:hover {
    background-color: var(--primary-color);
  }

  .btn-slide:hover span.circle {
    left: 100%;
    margin-left: -45px;
    background-color: #fdfdfd;
    color: var(--primary-color);
  }

  .btn-slide:hover span.title {
    left: 40px;
    opacity: 0;
  }

  .btn-slide:hover span.title-hover {
    opacity: 1;
    left: 40px;
  }

  .btn-slide span.circle {
    display: block;
    background-color: #000000;
    color: #fff;
    position: absolute;
    float: left;
    margin: 5px;
    line-height: 42px;
    height: 40px;
    width: 40px;
    top: 0;
    left: 0;
    transition: 0.5s;
    border-radius: 50%;
  }

  .btn-slide span.title,
  .btn-slide span.title-hover {
    position: absolute;
    left: 60px;
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    transition: 0.5s;
  }

  .btn-slide span.title-hover {
    left: 80px;
    opacity: 0;
  }

  .btn-slide span.title-hover {
    color: #fff;
  }
}
</style>
