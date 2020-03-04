import { ADD_FAVORITE } from './actionTypes'

const initialState = {
    favorites: []
}

export default function handleFavorites (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITE:
            return { ...state, favorites: state.favorites.push(action.payload) }
        default:
            return state
    }
}
