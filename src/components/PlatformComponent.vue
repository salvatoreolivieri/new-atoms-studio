<template>
  <div class="platform-container container">

    <div class="background-container"></div>

    <div class="text-container">

      <h2>Our Platform</h2>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet dolorem ipsum quia dolor sit amet.
      </p>

      <button class="button-without-background">
        Discover
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name:"PlatformComponent"
}
</script>

<style lang="scss" scoped>

// @import '../assets/style/base/mediaquery';

.platform-container{
  margin-top: 140px;

  display: flex;
  justify-content: space-between;

  .background-container{

    width: 80%;
    margin-right: 20px;
    background-image: url('../assets/img/Rectangle.jpg');

    background-position: center;
    background-repeat: no-repeat;

  }

  .text-container{

    height: 216px;
    width: 310px;

    margin-top: 42px;


    p{

      color: #9B9B9B;

      margin: 15px 0;
    }

  }


}

</style>