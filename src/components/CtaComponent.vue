<template>

  <div class="cta-container">

    <div class="newsletter-wrapper">

      <img class="arrow" src="../assets/img/arrow-black.svg" alt="arrow">

      <NewsletterLightComponent />

    </div>

    <div class="background-image"></div>

  </div>

</template>

<script>

import NewsletterLightComponent from './Newsletter/NewsletterLightComponent.vue';

export default {
    name: "CtaComponent",
    components: { NewsletterLightComponent }
}

</script>

<style lang="scss" scoped>

.cta-container{
  max-width: 90%;
  margin: 0 auto;

  margin-top: 140px;
  height: 350px;

  display: flex;
  align-items: center;


  background-image: url('../assets/img/Group 2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat ;

  .newsletter-wrapper{

    position: relative;
    margin-left: 30px;

    .arrow{
      position: absolute;
      top: 160px;
      right: 50px;
    }

  }

}

</style>