<template lang="html">
  <div class="product">
    <div class="product-ensemble" v-for="produitSelectionne in produit" :key="produitSelectionne.id">
      <div class="picture">
        <img class="main-picture" :src="firstPhotoURL()" :alt="produitSelectionne.name">
        <img class="second-vue" :src="secondPhotoURL()" :alt="produitSelectionne.name">
      </div>
      <div class="presentation">
        <h2>{{produitSelectionne.name}}</h2>
        <div v-for="artisan in artisanProduit" :key="artisan.id">
          <CarteArtisan :artisan="artisan"/>
        </div>
        <ul>
          <li><i class="fas fa-caret-right"></i> Origine : {{produitSelectionne.origine}}</li>
          <li><i class="fas fa-caret-right"></i> Dimensions :  {{produitSelectionne.dimensions}}</li>
          <li><i class="fas fa-caret-right"></i> Matériaux : {{produitSelectionne.materials}}</li>
        </ul>
        <p>{{produitSelectionne.longPrez}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CarteArtisan from "@/components/CarteArtisan";
  export default {
    name: 'ProduitDetails',
    components: { CarteArtisan },
    methods: {
      firstPhotoURL() {
        if (this.product.photo) {
          return 'http://localhost:3000/uploads/' + this.product.photo;
        } else {
          return 'http://localhost:3000/uploads/portrait-neutre.png';
        }
      },
      secondPhotoURL() {
        if (this.product.secondPhoto) {
          return 'http://localhost:3000/uploads/' + this.product.secondPhoto;
        } else {
          return 'http://localhost:3000/uploads/portrait-neutre.png';
        }
      },
    },

data() {
    return {
      produit: "",
      artisan: "",
      artisanProduit: "",
    };
  },
  mounted() {
      const axios = require("axios");
      axios.get(`http://localhost:3000/produit/${this.$route.params.id}`)
      .then(response => (this.produit = response.data));
      axios.get(`http://localhost:3000/artisanProduit/${this.$route.params.id}`).then(response => (this.artisanProduit = response.data));
  },
};

</script>


<style lang="css" scoped>
  .product {
    border: 1px solid rgb(250, 250, 250);
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-bottom: 4rem;
    justify-content: space-between;
    width: 90vw;
  }

  .product-ensemble {
    border: 1px solid rgb(250, 250, 250);
    display: flex;
    flex-direction: row;
    height: 90vh;
    margin: auto;
    justify-content: space-between;
    width: 100%;
  }

  .picture, .presentation {
    border: 1px solid rgb(250, 250, 250);
    width: 49%;
  }

  .picture {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .fa-caret-right {
    color: #006845;
  }

  .presentation a {
    color: #006845;
    text-decoration: none;
  }

  .presentation a:hover {
    font-weight: 600;
  }

  .product ul {
    padding-inline-start: 0px;
    margin-left: 0px;
  }

  .product li {
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

    .presentation, .picture {
      width: 100%;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

    .products-div {
      width: 100%;
    }

  }

</style>
