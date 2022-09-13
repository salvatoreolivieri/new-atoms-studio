<template>
  <div class="blog-wrapper">

    <!-- Inizio sezione con titolo e Call To Action: -->
    <div class="blog-container container">

      <div>
        <h2>Our Blog</h2>
      </div>

      <div>
        <a href="#">Read all articles</a>
      </div>

    </div>

    <!-- Componente dove vado a ciclare il singolo articolo: -->
    <AllArticlesComponent />

  </div>
</template>

<script>
import AllArticlesComponent from './Blog/AllArticlesComponent.vue';
export default {
    components: { AllArticlesComponent }
}
</script>

<style lang="scss" scoped>

.blog-wrapper{

  .blog-container{

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 56px;

    margin-bottom: 40px;

    a{
      text-decoration: underline;
    }

  }

}

</style>