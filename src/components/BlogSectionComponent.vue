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

    <!-- Indicatore puramente estetico: -->
    <div class="cursor-indicator container">
      <div class="indicator"></div>
    </div>

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

    h2{
      height: 56px;
      width: 820px;
      color: #293E59;
      font-family: Butler;
      font-size: 48px;
      font-weight: bold;
      letter-spacing: -0.3px;
      line-height: 56px;
    }

    a{
      text-decoration: underline;
    }

  }

  .cursor-indicator{
      margin-top: 50px;
      position: relative;

      height: 1px;
      border-bottom: 1px solid #CACACA;

      .indicator{
        width: 196px;
        height: 4px;

        border-radius: 10px;

        background-color: black;

        position: absolute;
        top: -1px;
        left: 200px;
      }
    }

}

</style>