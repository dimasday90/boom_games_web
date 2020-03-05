import { SET_LOADING } from '../actionTypes'

export default function loadingAction (value) {
    return {
        type: SET_LOADING,
        payload: value
    }
}