import React from "react";
import {
    useSelector
} from 'react-redux'

import {
  Typography,
  Box
} from '@material-ui/core'

import NoFavoriteGameItems from "./components/NoFavoriteGameItems"
import FavoriteGameList from "./components/FavoriteGameItems"

export default function Games() {
  const favorites = useSelector(state => state.favoriteReducer.favorites)
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
      {favorites.length === 0 && <NoFavoriteGameItems />}
      {favorites.length && <FavoriteGameList games={favorites} />}
    </>
  )
}
