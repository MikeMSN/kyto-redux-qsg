import {CHANGE_THEM, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";
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
    value: 'light',
    disabled: false
}

function themeReducer(state = initialTheme, action) {
    switch (action.type) {
        case CHANGE_THEM:
            return {...state, value: action.payload}
        case ENABLE_BUTTONS:
            return {...state, disabled: false}
        case DISABLE_BUTTONS:
            return {...state, disabled: true}
        default: return state
    }
}


export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})