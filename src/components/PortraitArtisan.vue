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

  @media only screen and (max-device-width: 1024px) {
   .artisan {
    background-size: contain;
  }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    

  }



</style>
