import './styles.css'
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import increment from "./redux/actions";
import decrement from "./redux/actions";

const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')
const themeButton = document.getElementById('theme')

const store = createStore(rootReducer, 0)


addButton.addEventListener('click', () => {
    store.dispatch(increment())
})

subButton.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncButton.addEventListener('click', () => {

})

themeButton.addEventListener('click', () => {
    //document.body.classList.toggle('dark');
})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
})

store.dispatch({type: 'INIT_APPLICATION'})



render()
