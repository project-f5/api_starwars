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
                name: '',
                gender: '',
                homeworld: '',
                specie: '',
                image: '',

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
        ...mapState(useStarwarsStore, ['characterArray', 'pictureArray', 'characterAddFavoriteArray']),
    },
    methods: {
       submit: function () {
            const character = {
                name: this.name,
                gender: this.gender,
                homeworld: this.homeworld,
                specie: this.specie,
                image: this.image,
            }
            this.characterAddArray.push(character)
            console.log(this.characterAddArray)
        },
        ...mapActions(useStarwarsStore, ['submmit'])
    },
}
</script>

<template>
    <h1>estamos hasta los huevos</h1>
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
            v-for="character in characterAddFavoriteArray"
            :key="character.index"
        >
            <PersonalizedCard
                :index="index"
                :src="character.image"
                :name="character.name"
                :gender="character.gender"
                :homeworld="character.homeworld"
                :speciesData="character.specie"
            />
        </div>
    </div>
    <form @submit.prevent="submit" id="formnewcharacter">
        <div id="name">
            <label>Name</label>
            <input
                required
                type="text"
                id="name-text"
                v-model="name"
                placeholder="Name"
            />
        </div>
        <div id="gender">
            <label>Gender</label>
            <input
                required
                type="text"
                id="gender-text"
                v-model="gender"
                placeholder="Gender"
            />
        </div>
        <div id="home-world">
            <label>Homeworld</label>
            <input
                required
                type="text"
                id="homeworld-text"
                v-model="homeworld"
                placeholder="HomeWorld"
            />
        </div>
        <div id="specie">
            <label>Specie</label>
            <input
                required
                type="text"
                id="specie-text"
                v-model="specie"
                placeholder="Specie"
            />
        </div>
        <div id="image">
            <label>Add Url Image</label>
            <input type="url" id="image-text" v-model="image"/>
        </div>
        <div id="btn-add">
            <button @click="submmit(name,gender,homeworld,specie, image)">Create Character</button>
        </div>
    </form>

    <!--<button @click="openform()">+</button> -->
    <!--<router-link :to="{ name: 'create' }">create</router-link>  -->
    <!--<FormNewCharacter/> -->
</template>

<style scoped>
@import '../assets/homeView.css';

form {
    border: 0.5rem #fff solid;
    margin: auto;
}
label {
    color: beige;
}
input {
    color: #000;
}

#name,
#gender,
#home-world,
#image,
#btn-add,
#specie {
    text-align: center;
    margin: 0.5rem;
}

p {
    color: #000;
    background-color: #fff;
    width: 10rem;
    margin: auto;
    margin-top: 0.4rem;
}
</style>