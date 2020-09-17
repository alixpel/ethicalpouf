<template>
  <div class="product" v-bind:style="{ backgroundImage: 'url(' + photoURLProduit() + ')' }">
  </div>
</template>

<script>
export default {
    name: "ImageProduit",

    props: ['product'],

    methods: {
      photoURLProduit() {
        if (this.product.photo) {
          return 'http://localhost:3000/uploads/' + this.product.photo;
        } else {
          return 'http://localhost:3000/uploads/produit.png'
        }
      },
      voirProduit(identifiant) {
        this.$router.push({ path: `/produitdetails/${identifiant}` });
      }
    }

}
</script>

<style scoped>

  .product {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.15rem;
  }

  .product h4, .product h3 {
    text-shadow: 1px 1px 2px #000000;
    color: rgb(250, 250, 250);
  }

  .product h4 {
    font-size: 1.2rem;
  }

  @media only screen and (max-device-width: 1024px) {
    .product {
    background-size: contain;
  }
  

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    

  }


</style>
