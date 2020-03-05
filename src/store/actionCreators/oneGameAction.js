import { SET_GAME_DATA } from '../actionTypes'

export default function oneGameAction (value) {
    return {
        type: SET_GAME_DATA,
        payload: value
    }
}