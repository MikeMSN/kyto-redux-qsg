import './styles.css'

const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')

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



render()
