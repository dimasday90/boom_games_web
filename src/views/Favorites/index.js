import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography, Box } from "@material-ui/core";

import NoFavoriteGameItems from "./components/NoFavoriteGameItems";
import FavoriteGameList from "./components/FavoriteGameItems";

import ThemeContext from "../../context/ThemeContext";

import { mountFavorites } from "../../store/actionCreators/favoriteActions";

export default function Games() {
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const search = useSelector(state => state.searchReducer.search);
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mountFavorites());
  }, [dispatch]);
  return (
    <>
      <Typography component="div">
        <Box
          textAlign="center"
          m={1}
          fontWeight="fontWeightBold"
          fontSize="h2.fontSize"
          style={theme.phantom ? { color: "white" } : { color: "black" }}
        >
          Favorite Game List
        </Box>
      </Typography>
      {favorites.length === 0 && <NoFavoriteGameItems />}
      {favorites.length && (
        <FavoriteGameList
          games={favorites.filter(
            favorite =>
              favorite.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          )}
        />
      )}
    </>
  );
}
