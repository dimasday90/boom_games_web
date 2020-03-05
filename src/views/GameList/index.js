import React, { useContext } from "react";
import useRAWGFetcher from "../../hooks/useRAWGFetcher";
import ThemeContext from '../../context/ThemeContext'

import {
  Typography,
  Box
} from '@material-ui/core'

import SkeletonGameItems from "../../components/SkeletonGameItems";
import GameItems from "./components/GameItems";

export default function Games() {
  const { loading, data: games } = useRAWGFetcher(
    "https://rawg-video-games-database.p.rapidapi.com/games"
  );

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
          Highlighted Game List
        </Box>
      </Typography>
      {loading && <SkeletonGameItems />}
      <GameItems games={ games } />
    </>
  )
}
