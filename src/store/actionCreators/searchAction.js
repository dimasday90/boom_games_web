import { SET_SEARCH } from "../actionTypes";

export default function searchAction(value) {
  return {
    type: SET_SEARCH,
    payload: value
  };
}
