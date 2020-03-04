import React from "react";
import useRAWGFetcher from "../../hooks/useRAWGFetcher";

import {
  Typography,
  Box
} from '@material-ui/core'

import SkeletonGameItems from "./components/SkeletonGameItems";
import GameItems from "./components/GameItems";

export default function Games() {
  const { loading, data: games } = useRAWGFetcher(
    "https://rawg-video-games-database.p.rapidapi.com/games"
  );
  return (
    <>
      <Typography component="div">
        <Box
          textAlign="center"
          m={1}
          fontWeight="fontWeightBold"
          fontSize="h2.fontSize"
        >
          Highlighted Game List
        </Box>
      </Typography>
      {loading && <SkeletonGameItems />}
      <GameItems games={ games } />
    </>
  )
}
