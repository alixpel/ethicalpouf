<template>
  <div>
    <div class="presentation">
      <div class="presentation-text">
        <h2>EthicAlly, qu'est-<br>ce que c'est ?</h2>
        <p>Sensible au monde et à ceux qui l’habitent.  Ethically est l’alliance du bien et du bien.
        Un espace  où les artisans de l’éthique vous présentent leurs créations et leurs engagements écologiques et humains.
        Parce qu'intégrer l’éthique dans notre mode de vie; c’est intégrer l’éthique dans notre mode de consommer.</p>
        <a href="#">En savoir plus</a>
      </div>
    </div>
    <div class="accueil-div">
      <h2>L'artisan du mois</h2>
      <div class="artisan-du-mois">
        <div class="portrait" v-for="artisan in artisanDuMois" :key="artisan.id">
            <CarteArtisan :artisan="artisan"/>
        </div>
        <div class="produits">
          <div class="product-div" v-for="product in produitsArtisanDuMois" :key="product.id">
            <CarteProduit :product="product"/>
          </div>
        </div>
      </div>
    </div>
    <div class="accueil-div">
      <h2>Les produits du moment</h2>
      <div class="groupe-produits">
        <div class="product-div" v-for="product in produitsFirstpage" :key="product.id">
          <CarteProduit :product="product"/>
        </div>
      </div>
    </div>
    <div class="accueil-div">
      <h2>Nos artisans du moment</h2>
      <div class="groupe-artisans">
        <div class="artisan-div" v-for="artisan in artisansFirstpage" :key="artisan.id">
          <div>
            <CarteArtisan :artisan="artisan"/>
          </div>
        </div>
      </div>
    </div>
    <div class="engagements-div">
      <h2>Nos engagements</h2>
      <div class="engagements">
        <div class="engagement">
          <p>Notre projet et l’effet papillon de nos achats.</p>
          <p>Acheter, cette simple action quotidienne peut receler des enjeux éthiques, humains et écologiques.</p>
          <p>Afin de vous permettre de consommer l’esprit serein, Ethically s’est chargé de sélectionner les marques les plus responsables du marché européen et africain.</p>
          <p>Ainsi, vous ne trouverez que des marques qui ont adopté une démarche humainement et écologiquement éthique.</p>
        </div>
        <div class="engagement">
          <p>Nos 3 missions
          <p>Pallier à la surexploitation de nouvelles matières premières.</p>
          <p>Limiter la surproduction de déchets.</p>
          <p>Soutenir les entreprises sociales et solidaires.</p>
          <p>Concrètement, nos produits sont fait à partir de matériaux recyclés, confectionnés dans le respect des droits humains et permettant une rémunération équitable.</p>
          <p>Concrètement, nos produits sont fait à partir de matériaux recyclés, dont la fabrication est respectueuse des droits humains et la rémunération de toutes les parties prenantes équitable.</p>
          <p>Nous tiens également à coeur la problématique de la pollution carbone. C’est la raison pour laquelle vous pouvez choisir chez des artisans près de chez vous.</p>
        </div>
        <div class="engagement">
          <p>Nos valeurs</p>
          <p>La clé de voûte de notre projet est l’éthique.</p>
          <p>Il en découle la transparence et une sélection accrue de nos produits.</p>
          <p>Ainsi, nous vous assurons qu’ils sont écologiquement responsable, issus de l’économie circulaire, respectueux des droits humains, avec une rémunération équitable de toutes les parties prenantes.</p>
        </div>
        <div class="engagement">
          <p>Vous et nous, ensemble</p>
          <p>Nous sommes tous concernés par le sort de notre planète, de son vivant et de nos semblables.</p>
          <p>Nous avons donc décidé d’être acteur du changement et de vous permettre de l’être aussi en consommant humainement et écologiquement éthique.</p>
        </div>
        <div class="engagement">
          <p>Nos artisans</p>
          <p>Nos partenaires ont pris le pari de changer le monde.</p>
          <p>Ensemble, nous pouvons les aider les aider à faire naître un monde meilleur, conscient de ses richesses et de ses vulnérabilités.</p>
        </div>
        <div class="engagement">
          <p>Le transport</p>
          <p>Les créations de nos artisans viennent directement de leur atelier jusqu'à chez vous. Moins d'intermédiaire, moins d'acheminement, moins de pollution.</p>
        </div>
        <div class="engagement">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarteProduit from "@/components/CarteProduit";
// import {produits as produitsFromData} from "@/data.js";
import CarteArtisan from "@/components/CarteArtisan";
// import {artisans as artisansFromData} from "@/data.js";

export default {
   name: 'Accueil',

  components:
    { CarteProduit, CarteArtisan },

  
  data() {
     return {
      artisans:"",
      artisanDuMois : "",
      produitsArtisanDuMois: "",
      produitsFirstpage:"",
      artisansFirstpage:"",
    };
  },

   mounted() {
     const axios = require("axios");
      axios.get(`http://localhost:3000/artisanDuMois`)
      .then(response => (this.artisanDuMois = response.data));

      axios.get(`http://localhost:3000/produitsArtisanDuMois`)
      .then(response => (this.produitsArtisanDuMois = response.data));

      axios.get('http://localhost:3000/produitsFirstpage')
      .then(response => (this.produitsFirstpage = response.data))

      axios.get('http://localhost:3000/artisansFirstpage')
      .then(response => (this.artisansFirstpage = response.data))

  },
  //  mounted() {
  //    const axios = require("axios");
  //    axios.get(`http://localhost:3000/artisanDuMois/${this.$route.params.id}`)
  //     .then(response => (this.artisanDuMois = response.data));
  //    axios.get(`http://localhost:3000/produitsArtisanDuMois/${this.$route.params.id}`)
  //     .then(response => (this.produitsArtisanDuMois = response.data));
  //   axios.get('http://localhost:3000/produitsFirstpage')
  //    .then(response => (this.produitsFirstpage = response.data))
  //   axios.get('http://localhost:3000/artisansFirstpage')
  //    .then(response => (this.produitsFirstpage = response.data))
  // },


}

</script >

<style lang="css" scoped>

.accueil-div {
  margin: 4rem 0rem;
}

.presentation {
  background-image: url("../assets/sculpture.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 6rem;
  padding: 2rem 4rem;
}

.presentation-text {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 1.3rem;
  padding: 1rem;
  width: 40vw;
}

.artisan-du-mois {
  display: flex;
}

.portrait .artisan {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  margin: 1rem;
  padding: 2rem 1rem 0.6rem 1rem;
  width: 48vw;
}

.portrait {
  vertical-align: middle;
}

.artisan-du-mois .product-div {
  height: 50%;
  width: 24.5vw;
}

.artisan-du-mois .product {
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-between;
  padding: 0.8rem 1rem;
}

.artisan-du-mois .produits {
  align-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
}

.groupe-artisans {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.artisan-div {
  width: 24.9vw;
}

.groupe-artisans .artisan {
  display: flex;
  flex-direction: column;
  height: 48vh;
  justify-content: space-between;
  padding: 0.8rem 1rem;
}

.groupe-produits {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.groupe-produits .product-div {
  width: 24.9vw;
}

.groupe-produits .product {
  display: flex;
  flex-direction: column;
  height: 48vh;
  justify-content: space-between;
  padding: 0.8rem 1rem;
}

.engagements-div {
  background-color: rgb(250, 250, 230);
  margin-top: 2rem;
  padding: 2rem 1rem 1rem 1rem;
}

.engagements {
  align-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.engagement {
  font-size: 1.1rem;
  height: 100%;
  padding: 2rem 1rem;
  text-align: center;
}

.presentation h2 {
  font-size: 4rem;
}

.accueil-div h2 {
  margin-bottom: 2rem;
}

.presentation a {
  color: #0f5209;
  font-weight: 600;
}


 @media only screen and (max-device-width: 1024px) {
   .presentation, .accueil-div, .engagements {
     margin: auto;
   }

   .accueil-div {
      margin-top: 2rem;
    }

   .presentation {
     background-position: center;
     background-repeat: no-repeat;
     background-size: contain;
     padding: 2rem 4rem;
   }

   .presentation-text {
     background-color: rgba(255, 255, 255, 0.4);
     font-size: 1.3rem;
     padding: 1rem;
     width: 84vw;
   }

   .artisan-du-mois {
     flex-direction: column;
   }

   .portrait .artisan {
     background-size: cover;
     height: 69vh;
     padding: 2rem;
     width: 95vw;
   }

   .engagements-div {
     padding: 2rem 1rem 1rem 1rem;
   }

   .engagements {
     flex-direction: column;
     margin-top: 1rem;
   }

   .engagement {
     padding: 0.5rem 1rem;
     width: 95vw;
   }

   .accueil-div h2 {
     margin-bottom: 1rem;
   }

    .presentation h2 {
      font-size: 4rem;
    }

    .groupe-artisans .artisan, .groupe-produits .product {
      height: 33.5vh;
    }

    .artisan-du-mois button {
      width: fit-content;
      margin: auto;
      margin-bottom: 0px;
    }

    .groupe-artisans button {
      font-size: 1.3rem;
      margin: auto;
      margin-bottom: 0px;
      width: fit-content;
    }

 }


@media only screen and (max-device-width: 1024px) and (min-device-width: 670px) {

   .artisan-du-mois .product-div {
     width: 49vw;
   }

   .groupe-produits .product-div {
     width: 49vw;
   }

   .groupe-artisans .artisan-div {
     width: 49vw;
   }

}

@media only screen and (max-device-width: 670px) {

  .accueil-div {
    margin-top: 3rem;
  }

  .groupe-produits .product-div, .artisan-du-mois .product-div, .groupe-artisans .artisan-div {
    width: 100vw;
  }

  .groupe-produits .product, .groupe-artisans .artisan {
    height: 40vh;
  }

  .artisan-du-mois .product {
    background-color: rgba(252, 252, 252, 0);
    height: 38vh;
  }

  .artisan, .product {
    width: 90%;
  }

  .artisan-du-mois .product {
    width: initial;
  }

  .presentation {
    background-image: url("../assets/sculpture2.png");
    background-position: center;
    padding: 0.6rem;
    width: 100%;
  }

  .presentation-text {
    background-color: rgba(255, 255, 255, 0.4);
    margin: auto;
    width: 100%;
  }

  .portrait .artisan {
    background-size: contain;
    height: 43.5vh;
    padding: 0.6rem;
    padding-top: 2rem;
    width: 94vw;
  }

  .groupe-artisans, .groupe-produits, .artisan-du-mois .produits {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .presentation-text h2 {
    font-size: 2rem;
  }

  .accueil-div h2 {
    font-size: 1.7;
  }

  .presentation-text p {
    font-size: 1.1rem;
  }

  .artisan h3, .product h3 {
    font-size: 1.6;
  }

  button {
    font-size: 1rem;
    padding: 0.4rem 1.2rem;
  }
  
  




}

</style>
