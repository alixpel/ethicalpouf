<template>
  <div class="background">
    <div class="title">
      <h2>adresse email pour la newsletter</h2>
    </div>
    <div class="artisans-group">
      <table>
        <thead>
          <tr>
            <th>inscription</th>
          </tr>
        </thead>
        <div class="artisan-div" v-for="inscrit in newsletters" :key="inscrit.id">
          <tbody>
              <tr>
                  <td>{{inscrit.id}}</td>
                  <td>{{inscrit.email}}</td>
              </tr>
          </tbody>
        </div>  
      </table>      
    </div>
    <button class="accueil-button" @click="retourMenu()">retour au menu</button>
  </div>
</template>

<script>


export default {
  name: 'inscriptionVoir',

  data() {
      return {
        newsletters : "",
      }
    },
  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/newsletters')
     .then(response => (this.newsletters = response.data))
   },
 
  methods: {
    
      retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
  }
}
</script>
 
 <style scoped>

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
  width: 25vw;
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

.artisan-div {
  padding: 0.2rem 1rem;
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

 
.bold {
  font-weight: bold;
}
 

 
</style>