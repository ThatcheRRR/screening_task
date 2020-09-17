import { INIT } from './types';

const initialState = {
    pos: [],
    weather: null,
    temperature: null,
    city: null
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT:
            return {
                ...state,
                coords: action.coords,
                city: action.city,
                temperature: action.temperature,
                weather: action.weather
            }
        default: return state;
    }
}