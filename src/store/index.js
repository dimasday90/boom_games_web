import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoriteReducer from './reducers/favoriteReducer'
import gameDetailReducer from './reducers/gameDetailReducer'
import loadingErrorReducer from './reducers/loadingErrorReducer'

const allReducer = combineReducers({
    favoriteReducer,
    gameDetailReducer,
    loadingErrorReducer
})

export default createStore (
    allReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)