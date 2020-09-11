<template>
  <div class="artisan" v-bind:style="{ backgroundImage: 'url(' + photoURL() + ')' }">
    <div class="name-and-origin">
      <h3>{{artisan.name}}</h3>
      <h4>{{artisan.origine}}</h4>
    </div>
    <!-- <img :src="photoURL()"/> -->

    <button @click="voirArtisan(artisan.id)">Voir le travail de cet artisan</button>

  </div>
</template>

<script>
export default {
    name: "CarteArtisan",

    props: ['artisan'],

    methods: {
      photoURL() {
        if (this.artisan.photo) {
          return 'http://localhost:3000/uploads/' + this.artisan.photo;
        } else {
          return 'http://localhost:3000/uploads/portrait-neutre.png';
        }
      },
      voirArtisan(identifiant) {
        this.$router.push({ path: `/artisandetails/${identifiant}` });
      }
    }
}
</script>

<style scoped>

  .artisan {
    background-color: rgb(240, 240, 240);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 1rem;
  }

  .artisan h4, .artisan h3 {
    text-shadow: 1px 1px 2px #000000;
    color: rgb(250, 250, 250);
  }

  .artisan h4 {
    font-size: 1.2rem;
  }

  button {
    background-color: rgba(240, 240, 240, 0.7);
    border: none;
    border-radius: 1.5rem;
    color: #006845;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.6rem 0.4rem 1.6rem;
    text-align: center;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-device-width: 1024px) {
    button {
      font-size: 1.5rem;
    }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    button {
      font-size: 1.3rem;
    }

  }



</style>
