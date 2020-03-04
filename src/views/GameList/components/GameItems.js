import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Grid,
  Typography
} from '@material-ui/core'
import {
  InfoOutlined as InfoOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon
} from '@material-ui/icons'
import {
  Link
} from 'react-router-dom'


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
                    <Link to={`/games/${game.id}`}>
                      <Button color="extended">
                        <InfoOutlinedIcon />
                        Details
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Button color="extended">
                      <FavoriteBorderOutlinedIcon />
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
