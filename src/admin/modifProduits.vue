<template>
  <div class="background">
    <div class="title">
      <h2>Nos produits</h2>
    </div>
    <div class="products-group">
      <div class="product-div" v-for="product in produits" :key="product.id">
        <div><h3>{{product.name}}</h3></div>
        <div><button class="modif-button" @click="changeProduct(product.id)">Modifier ce produit</button></div>
      </div>
    </div>
    <button class="accueil-button" @click="retourMenu()">retour au menu</button>
  </div>
</template>

<script>

export default {
  name: 'modifProduits',
   data() {
      return {
        produits : "",
      }
    },

  mounted() {
       const axios = require("axios");
       axios.get('http://localhost:3000/produits')
       .then(response => (this.produits = response.data))
     },

  methods: {
     retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
      
      changeProduct(identifiant) {
        this.$router.push({ path: `/modifierProduit/${identifiant}` });
      }
    }
 };

</script >

<style lang="scss" scoped>

.background {
  background-color: rgb(250, 250, 250);
  padding: 2rem 0rem;
}

.title {
  background-color: #d1fbef;
  border-radius: 1rem 1rem 0rem 0rem;
  margin: auto;
  width: 50vw;
}

.products-group {
  background-color: white;
  border-radius: 0rem 0rem 1rem 1rem;
  margin: auto;
  width: 50vw;
}

.product-div {
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 70%;
}

table {
  width: 100%;
}

thead,
tfoot {
  background-color: #006845;
  color: #fff;
  width: 100%;
}

tbody {
  margin: auto;
  width: 100%;
}

td {
  text-align: left;
  min-width: 3rem;
}

h3 {
  font-size: 1rem;
  font-weight: 400;
}

.accueil-button {
  background-color: #006845;
  border: none;
  border-radius: 0.6rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 2rem 0rem 2rem 0rem;
  padding: 0.2rem 1rem 0.3rem 1rem;
  text-align: center;
  text-size-adjust: 2vh;
}

.accueil-button:hover {
  background-color: #d1fbef;
  color: #006845;
  transition: all 0.2s ease-out;
}

.modif-button {
  background-color: rgb(253, 255, 128);
  border: none;
  border-radius: 0.2rem;
  color: rgb(87, 87, 87);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0.5rem 0rem;
  padding: 0.2rem 1rem 0.3rem 1rem;
  text-align: center;
  text-size-adjust: 2vh;
}

.modif-button:hover {
  background-color: #d1fbef;
  color: #006845;
  transition: all 0.2s ease-out;
}


 @media only screen and (max-device-width: 1024px) {

  .artisans {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }

  .artisans-groupe {

  }

  .product-div {
    width: 48vw;
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  
}

</style>
