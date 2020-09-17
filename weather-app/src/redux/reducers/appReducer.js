import { ERROR, REMOVE_ERROR } from '../types';

const initialState = {
    error: false
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR:
            return { ...state, error: true };
        case REMOVE_ERROR: {
            return { ...state, error: false };
        }
        default: return state;
    }
}