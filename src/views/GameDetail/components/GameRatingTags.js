import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Chip
} from '@material-ui/core'
import {
    Rating
} from '@material-ui/lab'

export default function GameRatingTags (props) {
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
                <Card>
                    <CardContent>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating name="game-rating-read-only" value={props.game.rating} readOnly />
                        </Box>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Tags</Typography>
                            <Grid item>
                                {props.game.tags && props.game.tags.map(tag => (
                                <Chip
                                    className="chip"
                                    key={tag.id}
                                    label={tag.name}
                                    color="primary"
                                />
                                ))}
                            </Grid>
                        </Box>
                    </CardContent>    
                </Card>
            </Grid>
        </Grid>
    )
}