<template>
  <div class="background">
    <div class="title">
      <h2>Bienvenue dans la partie administrative du site</h2>
    </div>
    <div class="admin-group">
      <h3>Les artisans</h3>
      <div class="button-group">
        <button class="admin-button" @click="ajoutArtisan()">Ajouter un artisan</button>
        <button class="admin-button" @click="changeArtisan()">Modifier un artisan</button>
        <button class="admin-button" @click="supprimerArtisan()">Supprimer un artisan</button>
      </div>
      <h3>Les produits</h3>
      <div class="button-group">
        <button class="admin-button" @click="ajoutProduit()">Ajouter un produit</button>
        <button class="admin-button" @click="changeProduit()">Modifier un produit</button>
        <button class="admin-button" @click="supprimerProduit()">Supprimer un produit</button>
      </div>
      <h3>Inscription</h3>
      <div class="button-group">
        <button class="admin-button" @click="voirInscrit()">voir inscription newsletter</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MenuAdmin',

    methods: {
      ajoutArtisan() {
        this.$router.push({ path: `/nouvelartisan` });
      },
      changeArtisan() {
        this.$router.push({ path: `/modifartisans` });
      },
      supprimerArtisan() {
        this.$router.push({ path: `/deleteartisan` });
      },

      ajoutProduit() {
        this.$router.push({ path: `/nouveauproduit` });
      },
      changeProduit() {
        this.$router.push({ path: `/modifproduits` });
      },
      supprimerProduit() {
        this.$router.push({ path: `/deleteproduit` });
      },
      voirInscrit() {
        this.$router.push({ path: `/inscriptionVoir` });
      }
    }
 };

</script >

<style lang="scss">

.background {
  background-color: rgb(250, 250, 250);
  padding: 2rem 0rem;
}

.title {
  background-color: #d1fbef;
  border-radius: 1rem 1rem 0rem 0rem;
  margin: auto;
  width: 60vw;
}

.admin-group {
  background-color: white;
  border-radius: 0rem 0rem 1rem 1rem;
  margin: auto;
  padding-top: 1rem;
  width: 60vw;
}

.button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  width: 95%;
}

  h2 {
    margin: 0px;
    padding: 0.6rem;
  }

  .admin-button {
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

  .admin-button:hover {
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
