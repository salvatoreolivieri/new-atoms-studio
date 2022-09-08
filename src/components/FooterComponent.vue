<template>
  <footer class="container">

    <div class="footer-top">

      <div class="footer-top-left">

        <h2>Let's Talk</h2>
  
        <p>
          We can help you size new business opportunities and new growth potential. We add real value and we are told that we are a breeze to work with.
        </p>
  
        <button class="button-without-background">
          Contact Us
        </button>

      </div>

      <div class="footer-top-center">

        <nav>

          <ul>

            <li>
              <a href="#">Works</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>

            <li>
              <a href="#">Our Platform</a>
            </li>

            <li>
              <a href="#">Why Us</a>
            </li>

            <li>
              <a href="#">Join Us</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Master Executive ECT 4.0</a>
            </li>

            <li>
              <a href="#">Contact Us</a>
            </li>

          </ul>

        </nav>

      </div>

      <div class="footer-top-right">

        <nav>

          <ul>

            <li>
              <a href="#">Turin</a>
            </li>

            <li>
              <a href="#">Barcelona</a>
            </li>

            <li>
              <a href="#">Dublin</a>
            </li>

            <li>
              <a href="#">New York</a>
            </li>

          </ul>

        </nav>
        
      </div>

    </div>


    <div class="footer-bottom">

      <div class="footer-bottom-left">
        
        <div class="logo-container">
          <img src="../assets/img/zerogrey-logo_dark200.png" alt="">
        </div>

        <div>
          <a href="#">Privacy Policy</a>
          <a @click="toTop" href="#">Cookie Policy</a>
        </div>

      </div>

      <div class="footer-bottom-center">
        <p>
          ZEROGREY© 2019 | P.I. IT08003340018 | All rights reserved. Various trademarks held by their respective owners
        </p>
      </div>

      <div class="footer-bottom-right">
        
        <div class="social-icon-container">

          <div class="social-icon">
            <img src="../assets/img/facebook.svg" alt="">
          </div>

          <div class="social-icon">
            <img src="../assets/img/instagram.svg" alt="">
          </div>

          <div class="social-icon">
            <img src="../assets/img/linkedin.svg" alt="">
          </div>

          <div class="social-icon">
            <img src="../assets/img/twitter.svg" alt="">
          </div>

        </div>

        <div class="language-website-container">

          <div class="language-website">
            <span class="active">eng</span>
          </div>

          <div class="language-website">
            <span>ita</span>
          </div>

          <div class="language-website">
            <span>esp</span>
          </div>

        </div>

      </div>
      
    </div>

  </footer>
</template>

<script>
export default {
  name:"FooterComponent",

}
</script>

<style lang="scss" scoped>

</style>