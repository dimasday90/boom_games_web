import { SET_GAME_DATA } from '../actionTypes'

const initialState = {
    game: {}
}

export default function loadingReducer (state = initialState, action) {
    switch(action.type) {
        case SET_GAME_DATA:
            return { ...state, game: action.payload }
        default: 
            return state
    }
}