import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchGameData } from "../../store/actionCreators/fetchGameDataAction";

import GameDescriptionImage from "./components/GameDescriptionImage";
import GameRatingTags from "./components/GameRatingTags";

import SkeletonGameDetail from "../../components/SkeletonGameDetail";

export default function GameDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loadingErrorReducer.loading);
  const game = useSelector(state => state.gameDetailReducer.game);

  useEffect(() => {
    dispatch(fetchGameData(id));
  }, [dispatch, id]);
  if (loading) return <SkeletonGameDetail />;
  return (
    <div id="game-detail-container">
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <GameDescriptionImage game={game} />
        </Grid>
        <Grid item>
          <GameRatingTags game={game} />
        </Grid>
      </Grid>
    </div>
  );
}
