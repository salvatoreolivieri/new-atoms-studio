<template>

  <div class="card-article">

    <!-- Immagine -->
    <img :src="`${item.img}`" :alt="item.title" >

      <!-- Data -->
      <span class="date">{{item.date}}</span> <br>

      <!-- Tag -->
      <div class="tag-container">

        <span
        v-if="this.item.tag"
        class="tag">

        #{{item.tag}}

      </span>

      <!-- Categoria -->
      <span class="tag">#{{item.category}}</span>

      </div>

      <!-- Titolo e autore -->
      <h3>{{item.title}}</h3><br>
      <span class="author">{{item.author}}</span>

  </div>
</template>

<script>
export default {
  name:"SingleArticleComponent",
  props:{
    item: Object
  }
}
</script>

<style lang="scss" scoped>

.card-article{
  height: 600px;
  width: 421px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;


  background: white;
  padding: 20px;

  img{

    position: absolute;
    top: 0;
    z-index: 0;

    width: 100%;
    height: 100%;

    filter: grayscale(50%);
    filter: brightness(50%);
  }

  span,
  h3{
    z-index: 99999;
  }


  .date{

    height: 18px;

    color: #FFFFFF;

    font-family: "Fira Sans";
    font-size: 12px;
    letter-spacing: 0;
    line-height: 18px;
    margin-left: 10px;

  }

  .tag-container{

    display: flex;

    .tag{
      color: #293E59;

      font-family: "Fira Sans";
      font-size: 12px;
      letter-spacing: 0;
      line-height: 18px;
      text-align: center;

      height: 24px;

      border-radius: 12px;
      background-color: #FFFFFF;

      padding: 5px 15px;
      margin: 10px 0;
      margin-left: 10px;
    }

  }
  

  h3{

    height: 80px;
    width: 370px;

    color: #FFFFFF;

    font-family: Butler;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.3px;
    line-height: 40px;

    margin-left: 10px;

  }

  .author{
    height: 20px;
    width: 95px;

    color: #FFFFFF;

    font-family: "Fira Sans";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;

    margin-left: 10px;

  }

}

</style>