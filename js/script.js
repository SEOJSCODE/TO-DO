const addTaskForm = document.querySelectorAll('.addtaskform')
const higTasks = document.querySelector('.hightasks')
const lowTasks = document.querySelector('.lowtasks')
addTaskForm[0].addEventListener('submit', printSomething)
addTaskForm[1].addEventListener('submit', printSomething)

import {addTask} from "./addTask.js";

function printSomething (event) {
    event.preventDefault()
    if(event.target === addTaskForm[0]) {
        addTask('addtask', higTasks)
    }
    else
        addTask('addtasklow', lowTasks)

}