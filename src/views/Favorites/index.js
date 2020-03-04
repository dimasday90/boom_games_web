import React from "react";
import useRAWGFetcher from "../../hooks/useRAWGFetcher";

import {
    useSelector
} from 'react-redux'

import {
  Typography,
  Box
} from '@material-ui/core'

import SkeletonGameItems from "../../components/SkeletonGameItems";
import NoFavoriteGameItems from "./components/NoFavoriteGameItems"
import FavoriteGameList from "./components/FavoriteGameItems"

export default function Games() {
  const { loading } = useRAWGFetcher(
    "https://rawg-video-games-database.p.rapidapi.com/games"
  );
  const favorites = useSelector(state => state.favorites)
  return (
    <>
      <Typography component="div">
        <Box
          textAlign="center"
          m={1}
          fontWeight="fontWeightBold"
          fontSize="h2.fontSize"
        >
          Favorite Game List
        </Box>
      </Typography>
      {loading && <SkeletonGameItems />}
      {favorites.length === 0 && <NoFavoriteGameItems />}
      {favorites.length && <FavoriteGameList games={favorites} />}
    </>
  )
}
