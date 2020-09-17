import { combineReducers } from 'redux';
import { historyReducer } from './reducers/historyReducer';
import { weatherReducer } from './reducers/weatherReducer';
import { appReducer } from './reducers/appReducer'

export const rootReducer = combineReducers({
    history: historyReducer,
    weather: weatherReducer,
    app: appReducer
});