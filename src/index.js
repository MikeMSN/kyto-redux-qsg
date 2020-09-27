import './styles.css'

const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')


let state = 0;

function render() {
    counter.textContent = state.toString();
}

addButton.addEventListener('click', () => {
    state++;
    render();
})

subButton.addEventListener('click', () => {
    state--;
    render();
})

asyncButton.addEventListener('click', () => {
    setTimeout(() => {
        state++;
        render();
    }, 2000)
})



render()
