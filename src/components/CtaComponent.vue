<template>

  <div class="cta-container container">

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
  margin-top: 140px;
  height: 350px;


  display: flex;
  align-items: center;
  justify-content: space-between;


  background-image: url('../assets/img/Group 2.jpg');
  background-size: contain ;
  background-repeat: no-repeat ;

  .newsletter-wrapper{

    position: relative;
    margin-left: 111px;

    .arrow{
      position: absolute;
      top: 123px;
      right: 0;
    }

  }

}

</style>