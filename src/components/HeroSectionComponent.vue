<template>

<div class="hero-section-wrapper">

  <!-- Cerchio nello sfondo: -->
  <div class="backgroud-circle"></div>


  <div class="hero-section-container container">

    <!-- Unique Value Proposition: -->
    <div class="unique-selling-position-container">
      <h1>Performance without compromises</h1>

      <p>How we helped Blumarine to conquer new businesses</p>

      <button class="button-without-background">
        Discover
      </button>
    </div>


    <!-- Immagine della ragazza: -->
    <div class="backgroud-hero-image">
      <img src="../assets/img/Blauer Detroit D5_612.jpg" alt="">
    </div>


    <!-- Decorazione: -->
    <div class="decoration">

      <div class="big-and-little-circle">
        <div class="little-circle"></div>
      </div>

      <div class="line"></div>

      <div class="little-circle"></div>

      <div class="line"></div>

      <div class="little-circle"></div>

      <div class="line"></div>

      <div class="little-circle"></div>

      <div class="line"></div>

    </div>


    <!-- Contenitore Call To Action Newsletter:-->
    <div class="newsletter-cta">

      <div class="newsletter-wrapper">

        <img src="../assets/img/delete.svg" alt="delete">
        <img class="arrow" src="../assets/img/arrow.svg" alt="arrow">

        <NewsletterDarkComponent />

      </div>

    </div>

  </div>

</div>

  
</template>

<script>
import NewsletterDarkComponent from "./Newsletter/NewsletterDarkComponent.vue";


export default {
    name: "HeroSectionComponent",
    components: { NewsletterDarkComponent }
}

</script>

<style lang="scss" scoped>

@import "../assets/style/var";

.hero-section-wrapper{

  width: 100%;
  position: relative;

  overflow: hidden;

  margin-bottom: 120px;

  .backgroud-circle{

      background-color: rgba(128, 199, 229, 0.5);

      width: 880px;
      height: 880px;
      border-radius: 50%;

      position: absolute;
      top: 0;
      right: -150px;

  }

  .hero-section-container{

    position: relative;

    height: 880px;


    .decoration{

      position: absolute;
      bottom: -350px;

      z-index: 8;


      .line{
        width: 130px;
      }

    }

    

    .unique-selling-position-container{

      position: absolute;
      z-index: 20;

      top: 170px;
      left: 0;

      h1{

        height: 160px;
        width: 814px;

        color: #293E59;

        font-family: Butler;
        font-size: 72px;
        font-weight: bold;
        letter-spacing: -0.3px;
        line-height: 80px;

      }

      p{

        height: 48px;
        width: 329px;

        color: #9B9B9B;

        font-family: "Fira Sans";
        font-size: 16px;
        letter-spacing: 0;
        line-height: 24px;

        margin: 20px 0;

      }

    }

    .backgroud-hero-image{

      width: 755px;
      height: 566px;

      position: absolute;
      z-index: 10;
      top: 32px;
      right: 127px;

      img{
        width: 100%;
      }

    }

    .newsletter-cta{

      width: 486px;
      height: 294px;

      padding: 40px;

      background-color: #293E59;

      position: absolute;
      z-index: 11;
      bottom: 76px;
      right: -36px;

      .newsletter-wrapper{
        position: relative;

        img{
          position: absolute;
          top: 0;
          right: 0;

          cursor: pointer;
        }

        .arrow{
          position: absolute;
          top: 123px;
          right: 0;
        }

      }

    }

  }

}



</style>