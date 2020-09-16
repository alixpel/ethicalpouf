<template lang="html">
  <div class="background">
    <div class="product-ensemble">
      <div class="photo" v-for="product in produitSelect" :key="product.id">
        <div class="smartphone">
          <h3>{{ product.name}}</h3>
        </div>
        <ImageProduit :product="product"/>
      </div>
      <div v-for="product in produitSelect" :key="product.id" class="presentation">
        <div  class="desktop">
          <h3>{{product.name}}</h3>
        </div>
        <div class="category-type">
          <div class="category">{{product.category}}</div>
          <div><i class="fas fa-ellipsis-h"></i></div>
          <div class="type">{{product.type}}</div>
        </div>
        <div class="assets">
          <ul>
            <li><sub><i class="fas fa-caret-right"></i></sub> Origine : {{product.origine}}</li>
            <li><sub><i class="fas fa-caret-right"></i></sub> Dimensions :  {{product.dimensions}}</li>
            <li><sub><i class="fas fa-caret-right"></i></sub> Matériaux : {{product.materials}}</li>
          </ul>
          <p>{{product.longPrez}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import CarteArtisan from "@/components/CarteArtisan";
  import ImageProduit from "@/components/ImageProduit";
  export default {
    name: 'ProduitDetails',
    components: { ImageProduit },

data() {
    return {
      produitSelect: ""
      // artisan: "",
      // artisanProduit: "",
    };
  },
  mounted() {
      const axios = require("axios");
      // le produit
      axios.get(`http://localhost:3000/produitSelect/${this.$route.params.id}`)
      .then(response => (this.produitSelect = response.data));
      // son artisan :
      // axios.get(`http://localhost:3000/artisanProduit/${this.$route.params.id}`).then(response => (this.artisanProduit = response.data));
  },
};

</script>


<style lang="css" scoped>

  .background {
    background-color: rgb(250, 250, 250);
    padding-bottom: 2rem;
    padding-top: 4rem;
  }

  .product-ensemble {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 4rem;
    min-height: 90vh;
    padding: 1rem;
    width: 90vw;
  }

  .photo, .presentation {
    width: 43.1vw;
  }

  .product {
    height: 100%;
  }

  .presentation {
    display: flex;
    flex-direction: column;
  }

  .desktop {
    margin-top: 1rem;
  }

  .smartphone {
    display: none;
  }

  .category-type {
    background-color: rgb(240, 240, 240);
    border-radius: 0.2rem;
    display: flex;
    justify-content: space-around;
    margin: 1rem 0rem;
    padding: 0.6rem 0rem 0.4rem 0rem;
  }

  .type, .category {
    color: #006845;
    font-weight: 600;
  }

  h2 {
    color: #006845;
  }

  .product h3 {
    font-size: 1.2rem;
  }

  .product p {
    text-align: left;
  }

  .assets p {
    text-align: justify;
  }

  .fa-caret-right {
    color: #15610f;
    font-size: 1.5rem;
  }

  .fa-ellipsis-h {
    color: #15610f;
    display: none;
    font-size: 1.5rem;
  }

  .presentation a {
    color: #0f5209;
    text-decoration: none;
  }

  .presentation a:hover {
    font-weight: 600;
  }

  .assets li {
    line-height: 2rem;
    list-style-type: none;
    text-align: left;
  }

  img {
    background-color: rgb(240, 240, 240);
    border: 1px solid grey;
    height: 50%;
    width: 50%;
  }

  @media only screen and (max-device-width: 1024px) {

    .product-ensemble {
      flex-direction: column;
    }

    .product {
      height: 60vh;
    }

    .presentation, .photo {
      width: 100%;
    }

    .smartphone {
      display: block;
      margin: 1rem;
      text-align: center;
    }

    .desktop {
      display: none;
    }

    .category-type {
      background-color: rgb(240, 240, 240);
      border-radius: 0.2rem;
      padding: 0.7rem 0rem 0.6rem;
    }

    .fa-ellipsis-h {
      display: block;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {


    .product {
      height: 43vh;
    }

  }

</style>
