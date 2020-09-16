<template lang="html">
  <div class="background">
    <div class="artisan-ensemble" v-for="artisan in artisanSelect" :key="artisan.id">
      <div class="smartphone"><h3>{{ artisan.name}}</h3></div>
      <PortraitArtisan :artisan="artisan" class="portrait"/>
      <div v-for="artisan in artisanSelect" :key="artisan.id" class="presentation">
        <div class="desktop"><h3>{{ artisan.name}}</h3></div>
        <p>{{ artisan.presentation}}</p>
      </div>
    </div>
    
    <h3> Produits de cet artisan: </h3>
    <div class="products">
      <div class="products-div" v-for="product in produitsArtisan" :key="product.id">
        <CarteProduit :product="product"/>
      </div>
    </div>
  </div>
</template>
<script>
import CarteProduit from "@/components/CarteProduit";
import PortraitArtisan from "@/components/PortraitArtisan";
// import {artisans as artisansFromData} from "@/data.js";
export default {
  name: "ArtisanDetails",
  components: { CarteProduit, PortraitArtisan },
  
  data() {
    return {
      artisanSelect: "",
      produitsArtisan: "",
    };
  },
  mounted() {
      const axios = require("axios");
      // artisan :
      axios.get(`http://localhost:3000/artisanSelect/${this.$route.params.id}`)
      .then(response => (this.artisanSelect = response.data));
      // ses produits :
      axios.get(`http://localhost:3000/produitsArtisan/${this.$route.params.id}`)
      .then(response => (this.produitsArtisan = response.data));
  },
};
</script>

<style lang="css" scoped>

  .background {
    background-color: rgb(250, 250, 250);
    padding-bottom: 2rem;
    padding-top: 4rem;
  }

  .artisan-ensemble {
    background-color: rgb(255, 255, 255);
    border-radius: 0.2rem;
    display: flex;
    flex-direction: row;
    height: 90vh;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 3rem;
    min-height: 90vh;
    padding: 1rem;;
    width: 90vw;
  }

  .presentation, .portrait {
    width: 43.5vw;
  }

  .presentation {
    overflow: scroll;
    padding: 1rem;
    text-align: left;
  }

  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    margin-top: 2rem;
  }

  .products-div {
    width: 24vw;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45vh;
    padding: 2rem 1rem;
  }

  .smartphone {
    display: none;
  }

  .presentation h2 {
    color: #0f5209;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media only screen and (max-device-width: 1024px) {
    .artisan-ensemble {
      flex-direction: column;
      height: auto;
      width: 95vw;
    }

    .presentation {
      height: auto;
      margin: auto;
      margin-top: 0rem;
      text-align: justify;
      width: 90vw;
    }

    .portrait {
      height: 40vw;
      margin: auto;
    }

    .artisan {
      background-size: cover;
      width: 40vw;
    }

    .products-div {
      width: 49%;
    }

    .smartphone {
      display: block;
      margin: 1rem;
      text-align: center;
    }

    .desktop {
      color: rgba(10, 10, 10, 0);
    }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

    .products-div {
      width: 100%;
    }

    .portrait {
      height: 70vw;
      margin: auto;
    }

    .artisan {
      background-size: cover;
      width: 70vw;
    }

  }

</style>
