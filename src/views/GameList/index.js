import React from "react";
import useRAWGFetcher from "../../hooks/useRAWGFetcher";

import SkeletonGameItems from "./components/SkeletonGameItems";
import GameItems from "./components/GameItems";

export default function Games() {
  const { loading, data: games } = useRAWGFetcher(
    "https://rawg-video-games-database.p.rapidapi.com/games"
  );
  if (loading) return <SkeletonGameItems />;
  return <GameItems games={games} />;
}
