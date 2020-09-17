<template>
  <div>
    <h2>adresse email pour la newsletter</h2>
    <button @click="retourMenu()">retour au menu</button>

    <div class="artisans-group">
        
            <table>
                <thead>
                    <tr>
                        <th colspan="2">inscription</th>
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
  .artisans-group {
      align-content: flex-start;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .artisan-div {
      width: 25vw;
    }

 table,
td {
    border: 1px solid #333;
}

thead,
tfoot {
    background-color: #006845;
    color: #fff;
}
 

button {
  padding: 2vh 2vw;
  background-color: yellow;
  border: solid 1px yellow;
}
 
.bold {
  font-weight: bold;
}
 

 
</style>