import {DECREMENT, INCREMENT} from "./types";

export default function increment() {
    return {
        type: INCREMENT
    }
}

export default function decrement() {
    return {
        type: DECREMENT
    }
}