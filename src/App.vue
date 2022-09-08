<template>
  <div id="app">

    <HeaderComponent />

    <HeroSectionComponent />

    <ServiceSectionComponent />

    <BlogSectionComponent />

    <PlatformComponent />

    <CtaComponent />

    <FooterComponent />

    <div v-if="buttonVisible" class="back-to-top-component">
      <BackToTopButton />
    </div>

  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroSectionComponent from './components/HeroSectionComponent.vue';
import ServiceSectionComponent from './components/ServiceSectionComponent.vue';
import BlogSectionComponent from './components/BlogSectionComponent.vue';
import PlatformComponent from './components/PlatformComponent.vue';
import CtaComponent from './components/CtaComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BackToTopButton from './components/BackToTopButton.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSectionComponent,
    ServiceSectionComponent,
    BlogSectionComponent,
    PlatformComponent,
    FooterComponent,
    CtaComponent,
    BackToTopButton
  },

  data(){
    return{
      buttonVisible: false
    }
  },

  created () {
    window.addEventListener('scroll', this.updateButtonVisibility);
  },

  methods:{
    updateButtonVisibility(){
      //console.log(document.documentElement.scrollTop);

      if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
        this.buttonVisible = true
      } else{
        this.buttonVisible = false
      }
    }
  }

}
</script>

<style lang="scss">

@import './assets/style/main';

</style>