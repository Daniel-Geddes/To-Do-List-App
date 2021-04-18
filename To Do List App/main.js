let addButton = document.getElementById('btn-primary');
let toDoContainer = document.getElementById('to-do-container');
let inputField = document.getElementById('input-field');
let taskContainer = document.getElementById('task-container');
let taskList = document.getElementById('tasks');
let topTasks = document.getElementById('top-tasks');
let completedTasks = document.getElementById('completed-tasks-list')
let enterKey = document.getElementById('input-field')



let today = new Date()
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[today.getDay()];
let date = n + ', ' + today.getDate() + '-' + (today.getMonth() +1) + '-' + today.getFullYear();
document.getElementById('date').innerHTML = date;

const favouriting = () => {

    addButton.addEventListener('click', () => {
        const para = document.createElement('p')
        const faveButton = document.createElement('i')
        taskList.appendChild(para)
        taskList.style.display = 'block';
        para.innerText = inputField.value
        para.insertAdjacentElement('beforebegin', faveButton)
        faveButton.className = "far fa-star"
        inputField.value = "";
        para.addEventListener('click', () => {
            if (para.style.textDecoration === 'none') {
                para.style.textDecoration = "line-through";
                faveButton.className = 'far fa-star'
                completedTasks.appendChild(faveButton)
                completedTasks.appendChild(para)
                toDoContainer.style.display = 'block'

            } else {
                para.style.textDecoration = "none";
                taskList.appendChild(faveButton)
                taskList.appendChild(para)
            }
        })

        faveButton.addEventListener('click', () => {
            if (faveButton.className === "far fa-star") {
                faveButton.className = "fas fa-star"
                topTasks.appendChild(faveButton)
                topTasks.appendChild(para)
                topTasks.style.display = "block";

            } else {
                faveButton.className = "far fa-star"
                taskList.appendChild(faveButton)
                taskList.appendChild(para)
            }
        })
    })
};

favouriting();





