import React, { useContext } from 'react'
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Chip
} from '@material-ui/core'
import ThemeContext from '../../../context/ThemeContext'

export default function GameDescriptionImage (props) {
    const theme = useContext(ThemeContext)
    return (
        <Grid
            container
            wrap="wrap"
            spacing={1}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
            >
                <Card
                    style={theme.phantom ? {backgroundColor: "grey", color: 'white'}
                    : {}
                    }
                >
                    <CardMedia
                        image={props.game.background_image}
                        title={props.game.slug}
                        style={{minHeight: 560}}
                    />
                </Card>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
            >
                <Card
                    style={theme.phantom ? {backgroundColor: "grey", color: 'white', minHeight: 560}
                    : {minHeight: 560}
                    }
                >
                    <CardContent>
                        <Typography
                            component="div"
                        >
                            <Box
                                textAlign="left"
                                fontSize={30}
                                m={1}
                            >
                                {props.game.name}
                            </Box>
                            <Box
                                textAlign="justify"
                                fontSize={12}
                                m={1}
                            >
                                Release Date: {props.game.released}
                            </Box>
                            <Box
                                textAlign="justify"
                                fontSize={14}
                                m={1}
                            >
                                {props.game.description_raw}
                            </Box>
                        </Typography>
                        <Typography>
                            Developers:
                        </Typography>
                        <Grid item>
                            {props.game.developers && props.game.developers.map(developer => (
                            <Chip
                                className="chip"
                                key={developer.id}
                                label={developer.name}
                                color={theme.phantom ? "secondary" : "primary"}
                            />
                            ))}
                        </Grid>
                        <Typography>
                            Genres:
                        </Typography>
                        <Grid item>
                            {props.game.genres && props.game.genres.map(genre => (
                            <Chip
                                className="chip"
                                key={genre.id}
                                label={genre.name}
                                color={theme.phantom ? "secondary" : "primary"}
                            />
                            ))}
                        </Grid>
                        <Typography>
                            Platforms:
                        </Typography>
                        <Grid item>
                            {props.game.platforms && props.game.platforms.map(({platform}) => (
                            <Chip
                                className="chip"
                                key={platform.id}
                                label={platform.name}
                                color={theme.phantom ? "secondary" : "primary"}
                            />
                            ))}
                        </Grid>
                        <Typography>
                            Stores:
                        </Typography>
                        <Grid item>
                            {props.game.stores && props.game.stores.map(({id, store}) => (
                            <Chip
                                className="chip"
                                key={id}
                                label={store.name}
                                color={theme.phantom ? "secondary" : "primary"}
                            />
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}