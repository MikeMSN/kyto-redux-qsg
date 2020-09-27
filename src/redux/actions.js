import {ASYNC_INCREMENT, CHANGE_THEM, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS
    }
}
export function disableButtons() {
    return {
        type: DISABLE_BUTTONS
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons());
        setTimeout(() => {
            dispatch(enableButtons())
            dispatch(increment())
        }, 1500);
    }

}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEM,
        payload: newTheme
    }

}