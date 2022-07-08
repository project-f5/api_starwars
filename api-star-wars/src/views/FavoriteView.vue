<script>
import { mapActions, mapState } from 'pinia'
import HeaderComponent from '../components/HeaderComponent.vue'
import { useStarwarsStore } from '../stores/starwars'
import FavoriteCard from '../components/FavoriteCard.vue'
import PersonalizedCard from '../components/personalizedCard.vue'
export default {
    data() {
        return {
            characterAddArray: [],

            planets: {
                'https://swapi.dev/api/planets/1/': 'Tattoine',
                'https://swapi.dev/api/planets/2/': 'Alderaan',
                'https://swapi.dev/api/planets/8/': 'Naboo',
                'https://swapi.dev/api/planets/14/': 'Kashyyyk',
                'https://swapi.dev/api/planets/20/': 'Stewjon',
                'https://swapi.dev/api/planets/21/': 'Eriadu',
                'https://swapi.dev/api/planets/22/': 'Corellia',
                'https://swapi.dev/api/planets/23/': 'Rodia',
                'https://swapi.dev/api/planets/24/': 'Nal Hutta',
                'https://swapi.dev/api/planets/26/': 'Bestine IV',
                'https://swapi.dev/api/planets/28/': 'Unknown',
            },
            species: {
                '': 'Unknown',
                'https://swapi.dev/api/species/2/': 'Droid',
                'https://swapi.dev/api/species/3/': 'Wookie',
                'https://swapi.dev/api/species/4/': 'Rodian',
                'https://swapi.dev/api/species/5/': 'Hutt',
                'https://swapi.dev/api/species/6/': "Yoda's Species",
            },
        }
    },
    components: { HeaderComponent, FavoriteCard, PersonalizedCard },
    computed: {
        ...mapState(useStarwarsStore, [
            'characterArray',
            'pictureArray',
            'characterAddArray',
        ]),
    },
    methods: {
        submit: function () {
            const character = {
                name: this.name,
                gender: this.gender,
                homeworld: this.homeworld,
                specie: this.specie,
            }
            this.characterAddArray.push(character)
            console.log(this.characterAddArray)
        },
    },
}
</script>

<template>
    <!-- <h1>estamos hasta los huevos</h1> -->
    <div class="grid">
        <div
            class="box"
            v-for="(character, index) in characterArray"
            :key="character.index"
        >
            <FavoriteCard
                :index="index"
                :src="pictureArray[index]"
                :name="character.name"
                :gender="character.gender"
                :homeworld="character.homeworld"
                :speciesData="character.species"
            />
        </div>
        <div
            class="box"
            v-for="character in characterAddArray"
            :key="character.index"
        >
            <PersonalizedCard
                :name="character.name"
                :gender="character.gender"
                :homeworld="character.homeworld"
                :speciesData="character.specie"
            />
        </div>
    </div>
    <form @submit.prevent="submit" id="formnewcharacter">
    <label id="title"><h3>ADD CHARACTER</h3></label>
    <div id="input__form">
         <div id="name">
            <label><h4>Name</h4></label>
            <input class="names"
                required
                type="text"
                id="name-text"
                v-model="name"
                placeholder="Name"
            />
        </div>
        <div id="gender">
            <label><h4>Gender</h4></label>
            <input class="genders"
                required
                type="text"
                id="gender-text"
                v-model="gender"
                placeholder="Gender"
            />
        </div>
        <div id="home-world">
            <label><h4>HomeWorld</h4></label>
            <input class="homes"
                required
                type="text"
                id="homeworld-text"
                v-model="homeworld"
                placeholder="HomeWorld"
            />
        </div>
        <div id="specie">
            <label><h4>Species</h4></label>
            <input class="species"
                required
                type="text"
                id="specie-text"
                v-model="specie"
                placeholder="Specie"
            />
        </div>
        <div id="image">
            <label><h4>Update Image</h4></label>
            <input class="upload" @change="clickImage(src)" type="file" src="" alt="image"  value="Upload"/>
        </div>

        <div id="btn-add">
            <input id="send" type="submit" value="CONFIRM">
        </div>
    </div>
       
        
    </form>

    <!--<button @click="openform()">+</button> -->
    <!--<router-link :to="{ name: 'create' }">create</router-link>  -->
    <!--<FormNewCharacter/> -->
</template>

<style scoped>
@import '../assets/homeView.css';
#formnewcharacter {
    border: none;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
    background: rgba(151, 151, 151, 0.2);
    width: 40rem;
    padding-top: 1rem;

}

#input__form {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    grid-template-rows: repeat(5);
  
   
}

h3 {
    padding-bottom: 0.7rem;
    font-family: 'Concert One';
}
h4 {
    position: absolute;
    font-size: 1.2rem;
    margin-left: 2rem;
}

#title {
    position: relative;
    color: beige;
    text-align: center;
    font-size: 1.8rem;

}

#upload {
    width: 1rem;
    height: 2rem;
}
 
.names, .genders, .homes, .species{
    color: #000;
    margin: 2px;
    border-radius: 5px;
    width: 11rem;
    height: 1.5rem;
}

#name,
#gender,
#home-world,
#image,
#specie {
    text-align: right;
    margin: 3px;
    margin-right: 50px;
}
#name {
    grid-area: 1 / 1 ;
}

#gender {
    grid-template-columns: 1fr 1fr;
    grid-area: 2 / 1 ;
}
#home-world {
    grid-area: 3 / 1 ;
}

#specie {
    grid-area: 4 / 1 ;
}

#image {
    grid-area: 5 / 1 ;
    margin-right:0px ;
    padding-left: 0px;
    padding-right: 0px;
}

#btn-add {
    grid-area: 5 / 2 ;
    margin: 1rem;
    margin-bottom: 1rem;
    margin-right: 2rem;
    
}
#send {
    background-color: #666161 ;
    border: none;
    color: beige;
    height: 2.2rem;
    width: 8rem;
    font-size: 1.2rem;
    font-family: 'Concert One';
}



</style>