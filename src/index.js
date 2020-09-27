import './styles.css'
import {applyMiddleware, createStore} from "redux";
import {counterReducer, rootReducer} from "./redux/rootReducer";
import {changeTheme, increment} from "./redux/actions";
import {decrement} from "./redux/actions";
import {asyncIncrement} from "./redux/actions";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')
const themeButton = document.getElementById('theme')



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)


addButton.addEventListener('click', () => {
    store.dispatch(increment())
})

subButton.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncButton.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

themeButton.addEventListener('click', () => {
    const newTheme = document.body.contains('light')? 'dark' : 'light';
    store.dispatch(changeTheme(newTheme))

})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter;
    document.body.className = state.theme.value;

    [addButton, subButton, themeButton, asyncButton]
        .forEach(btn => btn.disabled = state.theme.disabled)
})

store.dispatch({type: 'INIT_APPLICATION'});

