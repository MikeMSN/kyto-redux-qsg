import {CHANGE_THEM, DECREMENT, INCREMENT} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    }

    return state;
}

const initialTheme = {
    value: 'light'
}

function themeReducer(state = initialTheme, action) {
    switch (action.type) {
        case CHANGE_THEM:
            return {...state, value: action.payload}
        default: return state
    }
}


export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})