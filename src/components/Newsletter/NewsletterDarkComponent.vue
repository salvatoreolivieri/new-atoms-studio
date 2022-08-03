<template>
  <div class="newsletter">

    <h3>From our studio</h3>

    <p>Get a weekly email with inspirational contents from <br> Zerogrey.</p>
  
    <form action="">
      
      <input type="email" id="email" placeholder="write your e-mail" required><br>

      <input type="checkbox" name="privacy_policy" id="checkbox" required>
      <span>I read and accept the Privacy Policy</span>

    </form>

  </div>
</template>

<script>
export default {
  name:'NewsletterComponent'
}
</script>

<style lang="scss" scoped>

.newsletter{

  h3{

    height: 40px;
    width: 225px;

    color: #FFFFFF;

    font-family: Butler;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.3px;
    line-height: 40px;

  }

  p{

    height: 40px;
    width: 390px;

    margin-top: 10px;
    margin-bottom: 30px;

    color: #FFFFFF;

    font-family: "Fira Sans";
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;

  }

  #email{

    width: 100%;

    background-color: #293E59;
    color: #CACACA;

    border: none;
    padding: 2px;
    margin-bottom: 12px;

    border-bottom: 1px solid white;

    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;

    &:focus{
      outline: none;
    }

  }

  span{
    display: inline-block;
    margin-left: 5px;

    height: 18px;
    width: 194px;

    color: #FFFFFF;

    font-family: "Fira Sans";
    font-size: 12px;
    letter-spacing: 0;
    line-height: 18px;
  }

}

</style>