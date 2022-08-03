<template>

    <header class="container">

      <!-- Logo: -->
      <div class="logo-container">
        <img src="../assets/img/logo-3.svg" alt="logo">
      </div>


      <!-- Navigazione: -->
      <nav>

        <ul>

          <li>
            <a href="#">Works</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">Why Us</a>
          </li>

        </ul>

        <!-- Bottone: -->
        <div>
          <button>Let's Talk</button>
        </div>


      </nav>

    </header>

</template>

<script>
export default {
  name:"HeaderComponent",
}

</script>

<style lang="scss" scoped>

header{

  height: 43px;

  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container{
    width: 196px;

    img{
      width: 100%;
      cursor: pointer;

    }
  }

  nav{

    display: flex;


    ul{
      display: flex;
      align-items: center;

      @media screen and (max-width: 530px) {
        display: none;
        padding: 20px;
      }

      li{
        margin-right: 20px;

        a{

          height: 20px;
          width: 40px;

          font-family: "Fira Sans";
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 20px;

        }

      }

    }

  }

}

</style>