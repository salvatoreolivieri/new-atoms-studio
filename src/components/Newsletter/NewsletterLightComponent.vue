<template>
  <div class="newsletter">

    <h3>From our studio</h3>

    <p>Get a weekly email with inspirational contents from Zerogrey.</p>
  
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

  margin-top: 30px;
  width: 90%;

  p{

    margin-top: 10px;
    margin-bottom: 30px;

    color: #9B9B9B;

  }

  #email{

    width: 100%;

    background-color: transparent;
    color: #9B9B9B;

    border: none;
    padding: 2px;
    margin-bottom: 12px;

    border-bottom: 1px solid #9B9B9B;

    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;

    &:focus{
      outline: none;
    }

  }

  span{

    margin-left: 5px;

    color: #9B9B9B;
  }

}

</style>