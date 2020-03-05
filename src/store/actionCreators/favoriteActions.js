import { ADD_FAVORITE } from '../actionTypes'

export const addFavorite = (value) => {
    return {
        type: ADD_FAVORITE,
        payload: value
    }
}