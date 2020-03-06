import React, { useContext } from "react";
import { useDispatch } from "react-redux";
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
  DeleteOutlined as DeleteOutlinedIcon
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ThemeContext from "../../../context/ThemeContext";
import { deleteFavorite } from "../../../store/actionCreators/favoriteActions";

export default function FavoriteGameItems(props) {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);

  function deleteFavoriteClick(id) {
    dispatch(deleteFavorite(id));
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
                      onClick={() => deleteFavoriteClick(game.id)}
                      style={theme.phantom ? { color: "white" } : {}}
                    >
                      <DeleteOutlinedIcon />
                      Remove from Favorite
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
