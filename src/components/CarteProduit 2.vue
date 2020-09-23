<template>
  <div class="product" v-bind:style="{ backgroundImage: 'url(' + photoURLProduit() + ')' }">
    <div>
      <h3>{{product.name}}</h3>
    <h4>{{product.category}}</h4>
    <h4>{{product.type}}</h4>
    </div>

    <button @click="voirProduit(product.id)">Voir ce produit</button>

    </div>
</template>

<script>
export default {
    name: "CarteProduit",

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
    margin: 1rem;
  }

  .product h4, .product h3 {
    text-shadow: 1px 1px 2px #000000;
    color: rgb(250, 250, 250);
  }

  .product h4 {
    font-size: 1.2rem;
  }

  button {
    background-color: rgba(240, 240, 240, 0.7);
    border: none;
    border-radius: 1.5rem;
    color: #0f5209;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem auto;
    padding: 0.5rem 1.2rem 0.4rem 1.2rem;
    text-align: center;
    width: fit-content;
  }

  button:hover {
  background-color: rgba(240, 240, 240, 1);
  transition: all 0.5s ease-out;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-device-width: 1024px) {
    .product {
    background-size: contain;
  }
  

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    

  }


</style>
