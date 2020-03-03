import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import DetailsIcon from "@material-ui/icons/Details";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

export default function GameItems(props) {
  return (
    <div id="games-container">
      <Grid container wrap="wrap" spacing={3}>
        {props.games.map(game => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={game.id}>
            <Card className="card">
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
                        color="primary"
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
                    <Button color="extended">
                      <DetailsIcon />
                      Details
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button color="extended">
                      <FavoriteIcon />
                      Add as Favorite
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
