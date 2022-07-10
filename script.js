var taskname = []
var desc = []
var date = []

var data = {
    taskname: [],
    desc: [],
    date: [],
    completed: []
}


var taskname_input = document.querySelector('#newtask input');
var desc_input = document.querySelector('#desc');
var date_input = document.querySelector('#completion');

// document.querySelector('#push').onclick=function(){
//     console.log(date_input.value);
// }

document.querySelector('#push').onclick = function () {

    if (taskname_input.value.length == 0 || desc_input.value.length == 0 || date_input.value.length == 0) {
        alert("Please enter a task");
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${taskname_input.value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
        data.taskname.push(taskname_input.value)
        data.desc.push(desc_input.value)
        data.date.push(date_input.value)
        data.completed.push(0)
        console.log(data)

        //data.task.splice(i,1) //for deletion

        //resetting values
        taskname_input.value = ""
        desc_input.value = ""
        date_input.value = ""

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }

        // var tasks = document.querySelectorAll("#tasks");
        // for (var i = 0; i < tasks.length; i++) {
        //     console.log("tasks " + i)
        //     tasks[i].onclick = function () {
        //         alert(this.firstChild.value)
        //     }
        // }:
    }
    var tasks = document.querySelector("#tasks").children;
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            document.querySelector(".task-details").innerHTML = `
            <span id = "task-heading"> Task Details</span><br>
            <div class="task-details-child">
                <span id="task-name">Task: ${data.taskname[i]}</span><br>
                <span id="task-desc">Description: ${data.desc[i]}</span><br>
                <span id="task-date">Due-Date: ${data.date[i]}</span><br>
                <button id="complete">
                <i class="fa-solid fa-check"></i>
                </button>
            </div>
            `;
            document.querySelector("#complete").onclick = function () {
                data.completed[i]=1;
                tasks[i].setAttribute("class","completed");
            }
        }
    }
}
