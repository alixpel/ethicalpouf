<template>
  <div class="artisan-form">
    <h2>Ajouter un artisan</h2>
    <form method='post' encType="multipart/form-data">
      <div class="field">
        <label for="name">nom</label>
        <input type="text" v-model="name" value="name"/>
      </div>
      <div class="field">
        <label for="presentation">présentation</label>
        <textarea v-model="presentation" rows="15" cols="55"></textarea>
      </div>
      <!-- photo PARTIE ALIX-->
      <div class="field">
        <label for="photo">portrait</label>
        <input class="file-input" type="file" name="photo" v-on:change="photoDidChange" />
      </div>
      <!-- fin photo -->
      <div class="field">
        <label for="origine">origine</label>
        <input type="text" v-model="origine"/>
      </div>
      <div class="field">
        <label for="firstPage">première page</label>
        <input type="checkbox" value="première page" v-model="firstPage">
      </div>
      <div class="field">
        <label for="artisanDuMois">artisan du mois</label>
        <input type="checkbox" value="artisan du mois" v-model="artisanDuMois"/>
      </div>
      <button type="button" class="send" @click="postArtisan">Envoyer</button>
    </form>
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">L'artisan a bien été enregistré</p>
    <button class="accueil-button" @click="retourMenu()">retour au menu</button>
  </div>
  
</template>

<script>
export default {
  name: "NouvelArtisan",
  data() {
    return {
       name: "",
       presentation: "",
       photoFile: null,
       origine: "",
       firstPage: false,
       artisanDuMois: false,
       success: false,
    }
  },

  methods: {
    photoDidChange(event) {
      let fileInput = event.target;
      let files = fileInput.files;
      if (files.length) {
        let file = files[0];
        this.photoFile = file;
      }
    },
    postArtisan() {
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('presentation', this.presentation);
      formData.append('photoFile', this.photoFile);
      formData.append('origine', this.origine);
      formData.append('firstPage', this.firstPage);
      formData.append('artisanDuMois', this.artisanDuMois);
      const axios = require('axios');
      axios({
        method: 'post',
        url: 'http://localhost:3000/artisans/nouveau',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(() => {
        this.name = "";
        this.presentation = "";
        this.photoFile = null;
        this.origine = "";
        this.firstPage = "";
        this.artisanDuMois = "";
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

  .artisan-form {
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

  input, textarea {
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

  input, textarea {
    font-size: 1.2rem;
  }

  .send {
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
