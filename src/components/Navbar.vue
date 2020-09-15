<template>
    <div>
         <header>
      <div v-if="covidDisplay" class="covid-banner">
        <p>Nos livraisons pendant la période covid-19</p>
        <button type="button" class="acceptbutton" @click.prevent="closeBanner"><i class="fas fa-times"></i></button>
      </div>
      <div class="desktop-header">
        <div class="logo-and-menu">
          <div>
            <router-link :to="'/accueil'">
              <img class="logo" src="../assets/logo1.png" alt="logo">
            </router-link>
          </div>
          <div class="menu">
            <nav>
              <ul>
                <li> <router-link :to="'/accueil'">Accueil</router-link> </li>
                <li> <router-link :to="'/artisans'">Nos artisans </router-link> </li>
                <li> <router-link :to="'/allproduits'">Nos produits </router-link> </li>
                <li> <router-link :to="'/nosEngagements'">Nos engagements </router-link> </li>
                <li><a href="#">Le média</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="search-bar">
          <div class="magnifier">
            <button type="button" name="button" class="searchbar-button" @click.prevent="openSearch" v-if="openButtonDisplay"><i class="fas fa-search"></i></button>
            <button type="button" class="close-button" @click.prevent="closeSearch" v-if="closeButtonDisplay"><i class="fas fa-times"></i></button>
          </div>
        </div>
      </div>
      <div class="smartphone-header">
        <div class="burger-and-title">
          <div class="burger-menu">
            <button class="burger-open" type="button" name="button" @click.prevent="openSmartphoneMenu" v-if="burgerDisplay"><i class="fas fa-bars"></i></button>
            <button class="burger-close" type="button" name="button" @click.prevent="closeSmartphoneMenu" v-if="crossDisplay"><i class="fas fa-times"></i></button>
          </div>
          <div class="title">
            <img src="../assets/logosmall.png" alt="logo">
          </div>
        </div>
        <div class="smartphone-menu" v-if="smartphoneMenuDisplay">
          <nav>
              <ul>
                <li> <router-link :to="'/accueil'">Accueil</router-link> </li>
                <li> <router-link :to="'/artisans'">Nos artisans </router-link> </li>
                <li> <router-link :to="'/allproduits'">Nos produits </router-link> </li>
                <li> <router-link :to="'/nosEngagements'">Nos engagements </router-link> </li>
                <li><a href="#">Le média</a></li>
              </ul>
            </nav>
        </div>
        <!-- <div class="smartphone-search-bar">
          <div class="magnifier">
            <button type="button" name="button" class="searchbar-button" @click.prevent="openSmartphoneSearch" v-if="openSmartphoneButtonDisplay"><i class="fas fa-search"></i></button>
            <button type="button" class="close-button" @click.prevent="closeSmartphoneSearch" v-if="closeSmartphoneButtonDisplay"><i class="fas fa-times"></i></button>
          </div>
        </div> -->
      </div>
    </header>
    <main>
      <div v-if="searchBar" class="pop-up-searchbar-container">
        <div class="pop-up-searchbar">
          <label for="searchbar">Tapez votre recherche </label><input type="text" name="searchbar" value="" placeholder="recherche ..."><button class="research-button" type="button" name="button"><i class="fas fa-search"></i></button>
      </div>
      </div>
    </main>

    </div>
</template>

<script>
export default {
    name: "Navbar",

    data() {
      return {
        covidDisplay: true,
        searchBar: false,
        openButtonDisplay: true,
        // openSmartphoneButtonDisplay: true,
        closeButtonDisplay: false,
        // closeSmartphoneButtonDisplay: false,
        smartphoneMenuDisplay: false,
        crossDisplay: false,
        burgerDisplay: true,
      }
    },

    methods: {
      closeBanner() {
        this.covidDisplay = false;
      },

      openSearch() {
        this.searchBar = true;
        this.closeButtonDisplay = true;
        this.openButtonDisplay = false;
      },

      closeSearch() {
        this.searchBar = false;
        this.closeButtonDisplay = false;
        this.openButtonDisplay = true;
      },

      // openSmartphoneSearch() {
      //   this.searchBar = true;
      //   this.closeSmartphoneButtonDisplay = true;
      //   this.openSmartphoneButtonDisplay = false;
      // },
      //
      // closeSmartphoneSearch() {
      //   this.searchBar = false;
      //   this.closeSmartphoneButtonDisplay = false;
      //   this.openSmartphoneButtonDisplay = true;
      // },

      openSmartphoneMenu() {
        this.smartphoneMenuDisplay = true;
        this.crossDisplay = true;
        this.burgerDisplay = false;
      },

      closeSmartphoneMenu() {
        this.smartphoneMenuDisplay = false;
        this.crossDisplay = false;
        this.burgerDisplay = true;
      },
    }

}
</script>

<style lang="scss" scoped >
/* DIVISIONS */


header {
  display: flex;
  flex-direction: column;
}

.covid-banner {
  align-items: center;
  background-color: gold;
  display: flex;
  justify-content: center;
  text-align: center;
}

.desktop-header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.smartphone-header {
  display: none;
}

.logo-and-menu {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
}

header .menu {
  margin-left: 1rem;
  width: 64vw;
}

.search-bar {
  margin-right: 1rem;
}

.pop-up-searchbar-container {
  align-items: center;
  display: flex;
  justify-content: center;
}

.pop-up-searchbar {
  align-items: baseline;
  background-color: white;
  display: flex;
  padding: 1rem;
  position: absolute;
  width: 40%;
}


/* TITLES */


/* TEXT */

.covid-banner p {
  margin-bottom: 0rem;
  text-align: center;
}

// LINKS

.menu a {
  color: #0f5209;
  font-size: 1.3rem;
  font-weight: 600;
}

.menu a:hover {
  color: #0c3729;
	text-decoration: none;
  transition: all 0.5s ease-out;
  }

.menu a:not(:hover) {
  transition: all 0.5s ease-out;
}


/* NAVS & LISTS */

.menu ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem;
  padding-left: 0rem;
  width: 100%;
}

.menu li {
  list-style-type: none;
}

/* INPUTS */

.pop-up-searchbar input {
  background-color: #d1fdef;
  border: 0rem;
  border-radius: 1rem 0rem 0rem 1rem;
  padding: 0.2rem 0.4rem 0.1rem 0.7rem;
}

/* BUTTONS */

.covid-banner button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 2rem;
}

.close-button,
.searchbar-button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 2rem;
}

.research-button {
  background-color: #cdd8d5;
  border: 0px;
  border-radius: 0rem 1rem 1rem 0rem;
  color: #0f5209;
  padding: 0.2rem 0.8rem 0.1rem 0.7rem;
}

.research-button:hover {
  background-color: #d1fbef;
  transition: all 0.5s ease-out;
  }


/* IMG */

.logo {
  margin-right: 1rem;
  margin-top: 1rem;
  max-width: 10vw;
}



@media only screen and (max-device-width: 1024px) {

  .desktop-header {
    display: none;
  }

  .smartphone-header {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }

  .burger-and-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: 0.3;
    width: 70vw;
  }

  .covid-banner p, .covid-banner i {
    font-size: 2rem;
  }

  .search-bar {
    width: 20vw;
  }

  .smartphone-menu {
    margin-top: 2rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  .burger-open, .burger-close {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: #2d3e50;
    font-size: 4.5rem;
    font-weight: 400;
    margin-left: 2rem;
  }

  .smartphone-menu li {
    font-size: 2rem;
    line-height: 4.5rem;
    list-style-type: none;
    text-align: left;
  }

  .smartphone-menu a {
    color: #0f5209;
    font-size: 2.2rem;
    font-weight: 600;
  }

  .title a {
    color: black;
    text-decoration: none;
  }

  .smartphone-header img {
    height: 16rem;
  }

}


@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

  .desktop-header {
    display: none;
  }

  .covid-banner {
    display: none;
  }

  .burger-and-title {
    width: 77vw;
  }

  #nav {
    padding: 0rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  .burger-open, .burger-close {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 8rem;
    width: 21vw;
  }

  .burger-menu button {
    margin-left: 0rem;
  }

  .fa-bars, .fa-times {
    font-size: 3rem;
  }
  
  .smartphone-menu li {
    line-height: 3.5rem;
  }

  .smartphone-menu a {
    font-size: 1.6rem;
  }

  .smartphone-header img {
    height: 14rem;
  }


}


</style>
