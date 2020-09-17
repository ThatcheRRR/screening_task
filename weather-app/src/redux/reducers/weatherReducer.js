import { GET_WEATHER, GET_FROM_HISTORY } from '../types';

const initialState = {
    id: null,
    dateTime: null,
    lat: 0,
    lng: 0,
    weather: null,
    temperature: null,
    city: null,
};

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WEATHER:
            return {
                ...state,
                lat: action.lat,
                lng: action.lng,
                city: action.city,
                temperature: action.temperature,
                weather: action.weather,
                id: action.id,
                dateTime: action.dateTime
            }
        case GET_FROM_HISTORY: {
            return {
                ...state, ...action.itemFromHistory
            }
        }
        default: return state;
    }
}