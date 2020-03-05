import React, { useContext } from "react";
import {
    useSelector
} from 'react-redux'

import {
  Typography,
  Box
} from '@material-ui/core'

import NoFavoriteGameItems from "./components/NoFavoriteGameItems"
import FavoriteGameList from "./components/FavoriteGameItems"

import ThemeContext from '../../context/ThemeContext'

export default function Games() {
  const favorites = useSelector(state => state.favoriteReducer.favorites)
  const theme = useContext(ThemeContext)
  return (
    <>
      <Typography component="div">
        <Box
          textAlign="center"
          m={1}
          fontWeight="fontWeightBold"
          fontSize="h2.fontSize"
          style={theme.phantom ? {color: "white"}
          : {color: "black"}
          }
        >
          Favorite Game List
        </Box>
      </Typography>
      {favorites.length === 0 && <NoFavoriteGameItems />}
      {favorites.length && <FavoriteGameList games={favorites} />}
    </>
  )
}
