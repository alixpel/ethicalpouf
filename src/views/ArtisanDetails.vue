<template lang="html">
  <div class="">
    <div class="artisan-ensemble" v-for="artisan in artisanSelect" :key="artisan.id">
      <PortraitArtisan :artisan="artisan" class="portrait"/>
      <div v-for="artisan in artisanSelect" :key="artisan.id" class="presentation">
        <h3>{{ artisan.name}}</h3>
        <p> Présentation:{{ artisan.presentation}}</p>
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

  .artisan-ensemble {
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-bottom: 3rem;
    min-height: 90vh;
    width: 90vw;
  }

  .presentation, .portrait {
    width: 40vw;
  }

  .portrait {
  }

  .presentation {
    margin-left: 1rem;
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

  .presentation h2 {
    color: #0f5209;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media only screen and (max-device-width: 1024px) {
    .artisan-ensemble {
      flex-direction: column;
    }

    .presentation, .portrait {
      width: 100%;
    }

    .products-div {
      width: 49%;
    }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

    .products-div {
      width: 100%;
    }

  }

</style>
