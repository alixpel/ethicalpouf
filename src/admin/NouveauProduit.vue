<template>
  <div class="product-form">
    <h2>Ajouter un produit</h2>
    <form method='post' encType="multipart/form-data">
      <div class="field">
        <label for="">nom</label>
        <input type="text" v-model="name"/>
      </div>
      <div class="field">
        <label for="artisans">choisir l'artisan:</label>
        <select name="artisans" v-model="artisan_id" >
          <option v-for="artisan in artisans" :key="artisan.id" :value="artisan.id" > {{artisan.name}}</option>
        </select>
      </div>
      <div class="field">
        <label for="category">catégorie</label>
        <input type="text" v-model="category"/>
      </div>
      <div class="field">
        <label for="type">type</label>
        <input type="text" v-model="type"/>
      </div>
      <div class="field">
        <label for="materials">matériel</label>
        <input type="text" v-model="materials"/>
      </div>
      <div class="field">
        <label for="dimensions">dimensions</label>
        <input type="text" v-model="dimensions"/>
      </div>
      <div class="field">
        <label for="origine">origine</label>
        <input type="text" v-model="origine"/>
      </div>
      <div class="field">
        <label for="longPrez">présentation</label>
        <textarea v-model="longPrez" rows="12" cols="55"></textarea>
      </div>
      <!-- photo PARTIE ALIX-->
      <div class="field">
        <label for="photo">photo</label>
        <input class="file-input" type="file" name="photo" v-on:change="photoDidChange" />
      </div>
      <div class="field">
        <label for="secondPhoto">deuxième photo</label>
        <input class="file-input" type="file" name="secondPhoto" v-on:change="secondPhotoDidChange" />
      </div>
      <!-- fin photo -->
      <div class="field">
        <label for="firstPage">première page</label>
        <!-- <input type="text" v-model="firstPage"/> -->
        <input type="checkbox" value="première page" v-model="firstPage">
      </div>
      <div class="field">
        <label for="produitDuMois">produit de l'artisan du mois</label>
        <!-- <input type="text" v-model="produitDuMois"/> -->
        <input type="checkbox" value="première page" v-model="produitDuMois">
      </div>
      <button type="button" @click="postProduit" class="send">Envoyer</button>
    </form>
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">Le produit a bien été enregistré</p>
    <button class="accueil-button" @click="retourMenu()">retour au menu</button>
  </div>
  
</template>

<script>
export default {
  name: "NouveauProduit",
  data() {
    return {
      name: "",
      artisan_id:"",
      category: "",
      type: "",
      materials: "",
      photoFileProduct: null,
      secondPhotoFileProduct: null,
      dimensions: "",
      origine: "",
      longPrez: "",
      firstPage: false,
      produitDuMois: false,
      success: false,
    }
  },

    mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
   },

  methods: {
    photoDidChange(event) {
      let fileInput = event.target;
      let files = fileInput.files;
      if (files.length) {
        let file = files[0];
        this.photoFileProduct = file;
      }
    },
    secondPhotoDidChange(event) {
      let fileInput = event.target;
      let files = fileInput.files;
      if (files.length) {
        let file = files[0];
        this.secondPhotoFileProduct = file;
      }
    },
    postProduit() {
      let formDataProduct = new FormData();
      formDataProduct.append('name', this.name);
      formDataProduct.append('artisan_id', this.artisan_id);
      formDataProduct.append('category', this.category);
      formDataProduct.append('type', this.type);
      formDataProduct.append('materials', this.materials);
      formDataProduct.append('photoFileProduct', this.photoFileProduct);
      formDataProduct.append('secondPhotoFileProduct', this.secondPhotoFileProduct);
      formDataProduct.append('dimensions', this.dimensions);
      formDataProduct.append('origine', this.origine);
      formDataProduct.append('longPrez', this.longPrez);
      formDataProduct.append('firstPage', this.firstPage);
      formDataProduct.append('produitDuMois', this.produitDuMois);
      const axios = require('axios');
      axios({
        method: 'post',
        url:'http://localhost:3000/produits/nouveau',
        data: formDataProduct,
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(() => {
        this.name = "";
        this.artisan_id = "";
        this.category= "";
        this.type= "";
        this.materials= "";
        this.photoFileProduct = "";
        this.secondPhotoFileProduct = "";
        this.dimensions = "";
        this.origine = "";
        this.longPrez = "";
        this.firstPage = "";
        this.produitDuMois = "";
        this.success = true;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
}
</script>

<style  lang="css" scoped>

  .product-form {
    background-color: rgb(240, 240, 240);
    margin: auto;
    padding: 1rem;
    width: 95vw;
  }

  form {
    margin: auto;
    margin-top: 2rem;
    width: 65%;
  }

  .field {
    margin: 0.3rem 0rem;
  }

  label {
    text-align: left;
    width: 18%;
  }

  input, select, textarea {
    border: 0px;
    border-radius: 1rem;
    width: 50%;
  }

  .file-input {
    border-radius: 0px;
  }

  textarea {
    vertical-align: top;
  }

  .send {
    background-color: rgb(253, 255, 128);
    border: none;
    border-radius: 1rem;
    color: rgb(87, 87, 87);
    font-size: 0.9rem;
    font-weight: 500;
    margin: 2rem 0rem;
    padding: 0.2rem 1rem 0.3rem 1rem;
    text-align: center;
  }

  .send:hover {
    background-color: #d1fbef;
    color: #006845;
    transition: all 0.2s ease-out;
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

  .upload {
    background-color: #dbdbdb;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.2rem 1rem 0.3rem 1rem;
    text-align: center;
    width: 7rem;
  }


@media only screen and (max-device-width: 1024px) {

  form {
    width: 100%;
  }

  label {
    font-size: 1.2rem;
    width: 24%;
  }

  input, select, textarea {
    font-size: 1.2rem;
  }

  button {
    font-size: 1.2rem;
  }

}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {



  h2 {
    font-size: 1.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%
  }

  label {
    text-align: center;
    width: 100%;
  }

  input, select, textarea {
    width: 100%;
  }

}
</style>
