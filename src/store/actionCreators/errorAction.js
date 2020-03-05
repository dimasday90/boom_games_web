import { SET_ERROR } from '../actionTypes'

export default function errorAction (value) {
    return {
        type: SET_ERROR,
        payload: value
    }
}