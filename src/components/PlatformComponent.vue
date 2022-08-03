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
.platform-container{
  margin-top: 140px;

  display: flex;
  justify-content: space-between;

  .background-container{
    height: 300px;
    width: 978px;
    background-image: url('../assets/img/Rectangle.jpg');
    background-color: rgba(0,0,0,0.48);

  }

  .text-container{

    height: 216px;
    width: 310px;

    margin-top: 42px;


    h2{
      height: 56px;
      width: 296px;

      color: #293E59;

      font-family: Butler;
      font-size: 48px;
      font-weight: bold;
      letter-spacing: -0.3px;
      line-height: 56px;
    }

    p{
      height: 72px;
      width: 310px;

      color: #9B9B9B;

      font-family: "Fira Sans";
      font-size: 16px;
      letter-spacing: 0;
      line-height: 24px;

      margin: 15px 0;
    }

  }


}

</style>