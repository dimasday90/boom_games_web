import { SET_LOADING, SET_ERROR } from '../actionTypes'

const initialState = {
    loading: false,
    error: null
}

export default function loadingReducer (state = initialState, action) {
    switch(action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default: 
            return state
    }
}