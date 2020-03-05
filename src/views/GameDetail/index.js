import React, { useEffect } from 'react';
// import useRAWGFetcher from "../../hooks/useRAWGFetcher";
import {
    useParams
} from 'react-router-dom'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    Grid
} from '@material-ui/core'

import {fetchGameData} from '../../store/actionCreators/fetchGameDataAction'

import GameDescriptionImage from './components/GameDescriptionImage'
import GameRatingTags from './components/GameRatingTags'

export default function GameDetail () {
    const { id } = useParams()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loadingErrorReducer.loading)
    const game = useSelector(state => state.gameDetailReducer.game)
    // const {loading, data: game} = useRAWGFetcher(
    //     `https://rawg-video-games-database.p.rapidapi.com/games/${id}`
    // );
    
    useEffect(() => {
        dispatch(fetchGameData(id))
    }, [dispatch, id])

    if (loading) return <h1>Loading...</h1>
    return (
        <div id="game-detail-container">
            <Grid
                container
                direction="column"
                spacing={4}
            >
                <Grid
                    item
                >
                    <GameDescriptionImage game={game} />
                </Grid>
                <Grid
                    item
                >
                    <GameRatingTags game={game} />
                </Grid>
            </Grid>
        </div>
    )
}