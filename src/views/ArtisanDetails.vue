<template lang="html">
  <div class="">
    <div class="artisan-ensemble" v-for="artisanSelectionne in artisan" :key="artisanSelectionne.id">
      <div class="portrait">
        <img :src="photoURL()"/>
      </div>
      <div class="presentation">
        <h2>{{ artisanSelectionne.name}}</h2>
        <p>{{ artisanSelectionne.presentation}}</p>
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
export default {
  name: "ArtisanDetails",
  components: { CarteProduit },
  methods: {
      photoURL() {
        if (this.artisan.photo) {
          return 'http://localhost:3000/uploads/' + this.artisan.photo;
        } else {
          return 'http://localhost:3000/uploads/portrait-neutre.png';
        }
      },
      voirArtisan(identifiant) {
        this.$router.push({ path: `/artisandetails/${identifiant}` });
      }
    },
  data() {
    return {
      artisan: "",
      produitsArtisan: "",
    };
  },
  mounted() {
      const axios = require("axios");
      axios.get(`http://localhost:3000/artisan/${this.$route.params.id}`)
      .then(response => (this.artisan = response.data));
//PAS TRES SURE ENCORE DONC TU PEUX COMMENTER POUR VOIR SI LE RESTE FONCTIONNE:
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
    width: 49%;
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
    color: #006845;
    margin-bottom: 2rem;
    text-align: center;
  }

  .portrait img {
    width: 100%;
    height: 100%;
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
