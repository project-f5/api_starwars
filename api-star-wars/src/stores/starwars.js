import { defineStore } from 'pinia'

export const useStarwarsStore = defineStore({
    id: 'counter',
    state: () => ({
        pictureArray: [],
        characterArray:[],
    }),
    getters: {
        
    },
    actions: {
        addFavorite(src,character) {
            this.pictureArray.push(src)
            this.characterArray.push(character)
        },
        deleteFavorite(index) {
            this.characterArray.splice(index, 1);
            this.pictureArray.splice(index, 1);
            console.log(index);
        }
        }
    })
