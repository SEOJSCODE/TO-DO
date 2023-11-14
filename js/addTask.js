
export function addTask (value, container) {
    const inputAddTask = document.getElementById(value).value
    let div = document.createElement('div')
    let label = document.createElement('label')
    let inputRadio = document.createElement('input')
    let span = document.createElement('span')
    let closeButton = document.createElement('span')
    closeButton.className = 'close-task'
    div.className = 'todo-task'
    span.className = 'task-text'
    span.textContent = inputAddTask
    inputRadio.type = 'radio'
    label.appendChild(inputRadio)
    label.appendChild(span)
    div.appendChild(label)
    div.appendChild(closeButton)
    container.appendChild(div)

}