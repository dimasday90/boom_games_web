import React, { useContext } from 'react';

import {
    Typography,
    Box
} from '@material-ui/core';

import ThemeContext from '../../../context/ThemeContext'

export default function NoFavoriteGameItems () {
    const theme = useContext(ThemeContext)
    return (
        <Typography component="div">
            <Box 
                textAlign="center" 
                fontSize="h6.fontSize" 
                m={1}
                style={theme.phantom ? {color: "white"}
                : {color: "black"}
                }
            >
                No Favorite Games. You can add one or more in games page.
            </Box>
        </Typography>
    )
}