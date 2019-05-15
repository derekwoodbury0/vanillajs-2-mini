document.querySelector('form').addEventListener ('submit', addTodo)

function addTodo(event) {
    event.preventDefault()

    let item = document.createElement('li')
    item.innerText = document.querySelector('#item').value
    document.querySelector('ul').appendChild(item)

    item.addEventListener('click', completeTodo)
    
    let button = document.createElement('button')
    button.innerText = 'X'
    item.append(button)

    button.addEventListener('click', removeTodo)
}

function removeTodo(event) {
    event.target.parentNode.remove()
}

function completeTodo(event) {
    let value = event.target.getAttribute('aria-checked')

    if (value === true) {
        event.target.setAttribute('aria-checked', false)
    } else {
        event.target.setAttribute('aria-checked', true)
    }
}
