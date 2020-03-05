import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import favoriteReducer from './reducers/favoriteReducer'
import gameDetailReducer from './reducers/gameDetailReducer'
import loadingErrorReducer from './reducers/loadingErrorReducer'

const allReducer = combineReducers({
    favoriteReducer,
    gameDetailReducer,
    loadingErrorReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore (
    allReducer,
    composeEnhancers (
        applyMiddleware(thunk)
    )
)