<template>

<div class="service-section-wrapper">

  <!-- Cerchio nello sfondo: -->
  <div class="backgroud-circle"></div>

  <div class="service-section-container container">

    <!-- Testo al centro: -->
    <div class="text-container">
      <p>
        Zerogrey is a et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti et quas  excepturi sint occaecati cupiditate non provident.
      </p>
    </div>

    <div class="how-can-we-help-container">

      <!-- Testo sulla sinistra: -->
      <div class="call-to-action-container">
        <h2>How can we help your business?</h2>

        <button class="button-without-background">
          Discover our services
        </button>

      </div>

      <div class="service-we-offer-container">

        <!-- Decorazione: -->
        <div class="decoration">

          <div class="little-circle"></div>

          <div class="line"></div>

          <div class="big-and-little-circle">
            <div class="little-circle"></div>
          </div>

        </div>

        <!-- Servizio 1 -->
        <div class="service">

          <h3>Merchant of records</h3>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

        </div>


        <!-- Servizio 2 -->
        <div class="service">

          <h3>Operations</h3>

          <p>
            Nequempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

        </div>


        <!-- Servizio 3 -->
        <div class="service">

          <h3>Marketing & Sales</h3>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

        </div>


        <!-- Servizio 4 -->
        <div class="service">

          <h3>Store Management</h3>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

        </div>


      </div>

    </div>

    <!-- Contenitore con CTA -->
    <div class="why-choose-us-container">

      <div class="why-choose-us-text-container">

        <h2>Why should  you choose us?</h2>

        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet dolorem ipsum quia dolor sit amet.
        </p>

        <button class="white-button">
          Discover
        </button>

      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name:"ServiceSectionComponent"
}
</script>

<style lang="scss" scoped>


.service-section-wrapper{

  width: 100%;
  position: relative;

  overflow: hidden;

  margin-bottom: 140px;

  .backgroud-circle{

    background-color: rgba(128, 199, 229, 0.3);

    height: 1031.25px;
    width: 1031.25px;
    border-radius: 50%;

    position: absolute;
    top: 0;
    right: -150px;

  }

  .service-section-container{

    .text-container{

      position: relative;
      z-index: 9999;

      height: 120px;
      width: 867px;

      margin: 0 auto;

      color: #484A54;

      font-family: Butler;
      font-size: 32px;
      letter-spacing: -0.3px;
      line-height: 40px;
      text-align: center;
    }

    .how-can-we-help-container{

      display: flex;
      justify-content: space-between;

      height: 484px;
      width: 1311px;

      margin-top: 220px;
      margin-bottom: 120px;

      .call-to-action-container{
        height: 168px;
        width: 308px;


        h2{

          color: #293E59;

          font-family: Butler;
          font-size: 48px;
          font-weight: bold;
          letter-spacing: -0.3px;
          line-height: 56px;

          margin-bottom: 20px;
        }
        

      }

      .service-we-offer-container{

        position: relative;
        z-index: 9999;

        width: 867px;

        display: flex;
        flex-wrap: wrap;

        .service:not(:nth-child(2)){
          opacity: 0.5;
        }


        .service{
          width: 100%;

          display: flex;
          justify-content: space-between;

          

          h3{
            height: 80px;
            width: 200px;
            color: #293E59;
            font-family: Butler;
            font-size: 32px;
            font-weight: bold;
            letter-spacing: -0.3px;
            line-height: 40px;
            text-align: right;
          }

          p{
            height: 72px;
            width: 421px;
            opacity: 0.8;
            color: #293E59;
            font-family: "Fira Sans";
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px;
          }

        }

      }

    }

    .why-choose-us-container{
      position: relative;
      z-index: 999;

      background-color: rgba(0,0,0,0.32);
      background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,1,27,0.64) 99.99%);
      background-image: url('../assets/img/Rectangle-1.png');

      height: 600px;
      width: 1311px;

      padding: 100px;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      .why-choose-us-text-container{
        height: 248px;
        width: 421px;

        text-align: right;


        h2{
          color: #FFFFFF;
          font-family: Butler;
          font-size: 48px;
          font-weight: bold;
          letter-spacing: -0.3px;
          line-height: 56px;
        }

        p{
          
          margin: 15px 0;
          color: #FFFFFF;
          font-family: "Fira Sans";
          font-size: 16px;
          letter-spacing: 0;
          line-height: 24px;

        }


  
      }

    }

  }

}


</style>