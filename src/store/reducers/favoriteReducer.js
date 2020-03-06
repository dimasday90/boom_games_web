import { SET_FAVORITE } from "../actionTypes";

const initialState = {
  favorites: []
};

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}
