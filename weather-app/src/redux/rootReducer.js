import { INIT } from './types';

const initialState = {
    pos: [],
    city: null
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case INIT:
            return {...state, coords: action.coords, city: action.city}
        default: return state;
    }
}