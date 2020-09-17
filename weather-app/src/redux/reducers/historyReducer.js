import { PUSH_INTO_HISTORY } from '../types';

const initialState = [];

export const historyReducer = (state = initialState, action) => {
    switch(action.type) {
        case PUSH_INTO_HISTORY: {
            return [
                ...state,
                {
                    lat: action.lat,
                    lng: action.lng,
                    city: action.city,
                    temperature: action.temperature,
                    weather: action.weather,
                    id: action.id,
                    dateTime: action.dateTime
                }
            ]
        }
        default: return state;
    }
};