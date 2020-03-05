import { ADD_FAVORITE } from '../actionTypes'

const initialState = {
    favorites: []
}

export default function favoriteReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITE:
            return { ...state, favorites: state.favorites.concat([action.payload]) }
        default:
            return state
    }
}
