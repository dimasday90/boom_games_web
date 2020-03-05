import loadingAction from './loadingAction'
import oneGameAction from './oneGameAction'
import errorAction from './errorAction'
import axios from 'axios'

export const fetchGameData = (value) => {
    return function (dispatch) {
        dispatch(loadingAction(true))
        axios({
            method: "GET",
            url: `https://rawg-video-games-database.p.rapidapi.com/games/${value}`,
            headers: {
              "content-type": "application/octet-stream",
              "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
              "x-rapidapi-key": "067232f597mshc20b09566a2a287p176e17jsnc52fbc1e0652"
            }
          })
            .then(({ data }) => {
              dispatch(oneGameAction(data))
            })
            .catch(err => {
              dispatch(errorAction(err))
            })
            .finally(() => {
              dispatch(loadingAction(false))
            });
    }
}