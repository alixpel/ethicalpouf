<template>
  <div class="artisan" v-bind:style="{ backgroundImage: 'url(' + photoURL() + ')' }">
  </div>
</template>

<script>
export default {
    name: "PortraitArtisan",

    props: ['artisan'],

    methods: {
      photoURL() {
        if (this.artisan.photo) {
          return "http://localhost:3000/uploads/" + this.artisan.photo;
        } else {
          return "http://localhost:3000/uploads/portrait-neutre.png"; // image par défaut
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0.15rem;
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
    color: #0f5209;
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem auto;
    padding: 0.5rem 1.6rem 0.4rem 1.6rem;
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
   .artisan {
    background-size: contain;
  }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    

  }



</style>
