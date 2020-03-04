import React from 'react';

import {
    Typography,
    Box
} from '@material-ui/core';

export default function NoFavoriteGameItems () {
    return (
        <Typography component="div">
            <Box textAlign="center" fontSize="h6.fontSize" m={1}>
                No Favorite Games. You can add one or more in games page.
            </Box>
        </Typography>
    )
}