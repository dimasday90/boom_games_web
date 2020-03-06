import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Grid,
  Typography
} from "@material-ui/core";
import {
  InfoOutlined as InfoOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addFavorite } from "../../../store/actionCreators/favoriteActions";
import ThemeContext from "../../../context/ThemeContext";

export default function GameItems(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const theme = useContext(ThemeContext);

  function addFavoriteClick(payload) {
    dispatch(addFavorite(payload));
  }

  return (
    <div id="games-container">
      <Grid container wrap="wrap" spacing={3}>
        {props.games.map(game => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={game.id}>
            <Card
              className="card"
              style={
                theme.phantom ? { backgroundColor: "grey", color: "white" } : {}
              }
            >
              <CardContent>
                <CardMedia
                  className="card-image"
                  image={game.background_image}
                  title={game.slug}
                />
                <CardContent>
                  <Grid item xs zeroMinWidth>
                    <Typography gutterBottom noWrap variant="h5" component="h2">
                      {game.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {game.genres.map(genre => (
                      <Chip
                        className="chip"
                        key={genre.id}
                        label={genre.name}
                        color={theme.phantom ? "secondary" : "primary"}
                      />
                    ))}
                  </Grid>
                </CardContent>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  directions="row"
                  justify="space-around"
                  alignItems="center"
                >
                  <Grid item>
                    <Link
                      to={`/games/${game.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={theme.phantom ? { color: "white" } : {}}>
                        <InfoOutlinedIcon />
                        Details
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={
                        favorites.find(item => item.name === game.name)
                          ? true
                          : false
                      }
                      onClick={() => addFavoriteClick(game)}
                      style={theme.phantom ? { color: "white" } : {}}
                    >
                      <FavoriteBorderOutlinedIcon />
                      {favorites.find(item => item.name === game.name)
                        ? "My Favorite"
                        : "Add as Favorite"}
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
