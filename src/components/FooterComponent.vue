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
          <a href="#">Cookie Policy</a>
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
  name:"FooterComponent"
}
</script>

<style lang="scss" scoped>

@import "../assets/style/var";

footer{

  margin-top: 126px;
  padding: 81px 0;

  .footer-top{

    display: flex;
    justify-content: space-between;

    padding-bottom: 70px;

    border-bottom: 1px solid #CACACA;

    .footer-top-left{

      width: 45%;

      h2{
        height: 64px;

        color: #293E59;
        
        font-family: Butler;
        font-size: 56px;
        font-weight: bold;
        letter-spacing: -0.3px;
        line-height: 64px;
      }

      p{
        height: 72px;
        width: 422px;

        color: #9B9B9B;

        font-family: "Fira Sans";
        font-size: 16px;
        letter-spacing: 0;
        line-height: 24px;

        margin: 15px 0;
      }

    }

    .footer-top-center,
    .footer-top-right{

      width: 20%;

      li{
        margin-bottom: 20px;

        a{
          height: 24px;
          width: 45px;
          font-family: "Fira Sans";
          font-size: 16px;
          letter-spacing: 0;
          line-height: 24px;
        }
      }

    }

  }

  .footer-bottom{

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 120px;

    .footer-bottom-left{

      .logo-container{
        height: 40px;
        width: 167.23px;

        margin: 30px 0;

        img{
          width: 100%;
        }
      }

      a{
        margin-right: 30px;

        font-family: "Fira Sans";
        font-size: 14px;
        letter-spacing: 0;
        line-height: 20px;
      }


    }

    .footer-bottom-center{

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      height: 100%;

      p{
        height: 18px;

        color: #293E59;

        font-family: "Fira Sans";
        font-size: 12px;
        letter-spacing: 0;
        line-height: 18px;
        text-align: center;
      }
      
    }

    .footer-bottom-right{

      height: 100%;

      .social-icon-container{

        display: flex;
        align-items: center;

        height: 40px;
        margin: 30px 0;


        .social-icon{
          margin-left: 20px;

          img{

            cursor: pointer;

            &:hover{
              color: $button-color;
            }

          }

        }

      }

      .language-website-container{

        display: flex;
        align-items: end;
          justify-content: end;


        .language-website{

          span{

            margin-left: 20px;

            height: 20px;
            width: 20px;

            color: #293E59;

            font-family: "Fira Sans";
            font-size: 14px;
            letter-spacing: 0;
            line-height: 20px;

            text-transform: uppercase;
            cursor: pointer;

            &.active{
              color: $button-color;

              font-weight: bold;
              text-decoration: underline;
              
            }

          }

        }
        
      }
      
    }

  }

}

</style>