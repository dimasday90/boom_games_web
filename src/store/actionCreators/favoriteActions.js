import { SET_FAVORITE } from "../actionTypes";
import loadingAction from "./loadingAction";
import errorAction from "./errorAction";
import axios from "axios";

export const addFavorite = value => {
  return function(dispatch) {
    dispatch(loadingAction(true));
    axios
      .post("http://localhost:3000/favorites", value)
      .then(response => {
        return axios.get("http://localhost:3000/favorites");
      })
      .then(({ data }) => {
        dispatch(setFavorite(data));
      })
      .catch(err => {
        dispatch(errorAction(err));
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };
};

export const deleteFavorite = id => {
  return function(dispatch) {
    dispatch(loadingAction(true));
    axios
      .delete("http://localhost:3000/favorites/" + id)
      .then(response => {
        return axios.get("http://localhost:3000/favorites");
      })
      .then(({ data }) => {
        dispatch(setFavorite(data));
      })
      .catch(err => {
        dispatch(errorAction(err));
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };
};

export const mountFavorites = () => {
  return function(dispatch) {
    dispatch(loadingAction(true));
    axios
      .get("http://localhost:3000/favorites")
      .then(({ data }) => {
        dispatch(setFavorite(data));
      })
      .catch(err => {
        dispatch(errorAction(err));
      })
      .finally(() => {
        dispatch(loadingAction(false));
      });
  };
};

export const setFavorite = value => {
  return {
    type: SET_FAVORITE,
    payload: value
  };
};
