import { INIT } from './types';

const initialState = {
    cords: [0, 0],
    weather: null,
    temperature: null,
    city: null,
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT:
            return {
                ...state,
                cords: action.cords,
                city: action.city,
                temperature: action.temperature,
                weather: action.weather
            }
        default: return state;
    }
}