import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRAWGFetcher from "../../hooks/useRAWGFetcher";
import ThemeContext from "../../context/ThemeContext";

import { Typography, Box } from "@material-ui/core";

import SkeletonGameItems from "../../components/SkeletonGameItems";
import GameItems from "./components/GameItems";

import { mountFavorites } from "../../store/actionCreators/favoriteActions";

export default function Games() {
  const { loading, data: games } = useRAWGFetcher(
    "https://rawg-video-games-database.p.rapidapi.com/games"
  );
  const dispatch = useDispatch();
  const search = useSelector(state => state.searchReducer.search);

  const theme = useContext(ThemeContext);

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
          Highlighted Game List
        </Box>
      </Typography>
      {loading && <SkeletonGameItems />}
      <GameItems
        games={games.filter(
          game => game.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        )}
      />
    </>
  );
}
