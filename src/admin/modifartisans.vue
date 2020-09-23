<template>
  <div class="background">
    <div class="title">
      <h2>Nos artisans</h2>
    </div>
    <div class="artisans-group">
        <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id">
           <div><h3>{{artisan.name}}</h3></div>
           <div><button class="modif-button" @click="changeArtisan(artisan.id)">Modifier cet artisan</button></div>
        </div>
    </div>
    <button class="accueil-button" @click="retourMenu()">retour au menu</button>
  </div>
</template>

<script>
export default {
  name: 'modifartisans',

  data() {
      return {
        artisans : "",
      }
    },
  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
   },

  methods: {
    retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
    changeArtisan(identifiant) {
        this.$router.push({ path: `/modifierArtisan/${identifiant}` });
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

.artisans-group {
  background-color: white;
  border-radius: 0rem 0rem 1rem 1rem;
  margin: auto;
  width: 50vw;
}

.artisan-div {
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

  .artisan-div {
    width: 48vw;
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .artisans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .artisan-div {
    width: 98vw;
  }

  .artisans-div h4 {
    font-size: 3rem;
  }
}

</style>
