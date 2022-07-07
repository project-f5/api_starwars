
<script>
export default {
    name: 'FormNewCharacter',
    data() {
        return {
            characterArray: [], 
             
                name: '',
                gender: '',
                homeworld: '',
                specie: '',
                src: [],
            
        }
    },

    methods: {
        submit: function () {
            const character = {
                name: this.name,
                gender: this.gender,
                homeworld: this.homeworld,
                specie: this.specie,
            }
            this.characterArray.push(character)
            console.log(this.characterArray)
        }
        
    },
}
</script>

<template>
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
        <!--<div id="image">
            <label>Update Image</label>
            <input @change="clickImage(src)" type="file" src="" alt="image" />
        </div>-->
        <div id="btn-add">
            <input type="submit" value="Create Character"> 
        </div>
    </form>
</template>

<style scoped>
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