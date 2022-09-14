<template>

<div class="hero-section-wrapper">

  <!-- Cerchio nello sfondo: -->
  <div class="backgroud-circle"></div>


  <div class="hero-section-container">


    <div class="unique-selling-position-container container">

      <!-- Unique Value Proposition: -->
      <div class="hero-section-text-container">
        <h1>Performance without compromises</h1>
  
        <p>How we helped Blumarine to conquer new<br> businesses</p>
  
        <button class="button-without-background">
          Discover
        </button>
      </div>

      <!-- Immagine della ragazza: -->
      <div class="backgroud-hero-image">
        <img src="../assets/img/Blauer Detroit D5_612.jpg" alt="">
      </div>
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
    <div class="newsletter-cta hero-section-newsletter">

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

.hero-section-wrapper{

  width: 100%;
  position: relative;
  overflow: hidden;

  margin-bottom: 120px;

  .backgroud-circle{

      background-color: rgba(128, 199, 229, 0.5);

      width: 700px;
      height: 700px;
      border-radius: 50%;

      position: absolute;
      top: 0;
      right: -150px;
      z-index: -1;

  }

  .hero-section-container{

    height: 735px;

    .decoration{

      position: absolute;
      bottom: -350px;

      .line{
        width: 130px;
      }

    }

    .unique-selling-position-container{
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 40px;

      .hero-section-text-container{

        width: 50%;
        margin-top: 150px;

        p{
          color: #9B9B9B;
          margin: 20px 0;
        }
      }

      .backgroud-hero-image{

        width: 50%;
        height: 100%;

        margin-top: 30px;

        img{
          width: 100%;
        }

      }

    }


    .newsletter-cta{

      padding: 50px;

      background-color: #293E59;

      position: absolute;
      z-index: 3;
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