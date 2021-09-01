let http = require("http");
let url = require("url");
let file = require("fs");

let taskPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
</head>
<body>
    <h3>Task Planner</h2>
    <form action="addTask">
        Add Task<br>
        <label>Emp Id: </label>
        <input type="text" id="empId" name="empId"><br>
        <label>Task Id: </label>
        <input type="text" id="taskId" name="taskId"><br>
        <label>Task: </label>
        <input type="text" id="task" name="task"> <br>
        <label>Deadline</label>
        <input type="date" id="value" name="deadline"><br>
        <input type="submit" value="Add Task">
    </form>
    <br>
    <form action="deleteTask">
        Delete Task<br>
        <label>Task Id: </label>
        <input type="text" id="deleteTaskId" name="deleteTaskId"><br>
        <input type="submit" value="Delete Task"> 
    </form>
    <br>
   <table id="listTasks" style="border-style: solid;">
        <tr>
            <th>EID</th>
            <th>TID</th>
            <th>Task</th>
            <th>Deadline</th>
        </tr>
    </table>
</body>
</html>
`


let server = http.createServer((request,response)=>{
    let urlInfo = url.parse(request.url,true);
    response.write(taskPage);
    let tasksToWrite = [];
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.pathname=="/addTask"){
            let temp = urlInfo.query;
            let data = file.readFileSync("taskPlanner.json");
            let tasks = [];
            if(data.length){
                tasks = JSON.parse(data);
            }
            let newTask = {"empId" : temp.empId, "taskId" : temp.taskId, "task" : temp.task, "deadline" : temp.deadline};
            tasks.push(newTask);
            tasksToWrite = tasks;
            file.writeFileSync("taskPlanner.json", JSON.stringify(tasks));
        }
        else if(urlInfo.pathname=="/deleteTask"){
            let deleteTask = urlInfo.query;
            let tasks = [];
            let data = file.readFileSync("taskPlanner.json");
            if(data.length){
                tasks = JSON.parse(data);
                for(let t of tasks){
                    let i = tasks.indexOf(t)
                    console.log(deleteTask.deleteTaskId);
                    if(t.taskId == deleteTask.deleteTaskId){
                        console.log("found tid");
                        tasks.splice(i,i + 1);
                        file.writeFileSync("taskPlanner.json", JSON.stringify(tasks));
                        break;
                    }
                }
                tasksToWrite = tasks;
            }
        }
        let currTable = document.getElementById("listTasks");
        let i = 0;
        for(let t of tasksToWrite){
            let row = currTable.insertRow(i);
            var eidCell = row.insertCell(0);
            var tidCell = row.insertCell(1);
            var taskDetails = row.insertCell(2);
            var deadline = row.insertCell(3);
            eidCell.innerHTML = tasksToWRite.empId;
            tidCell.innerHTML = tasksToWRite.taskId;
            taskDetails.innerHTML = tasksToWRite.task;
            deadline.innerHTML = tasksToWRite.deadline;
            i++;
        }
    }
    response.end();
});

server.listen(9090,()=>console.log("Server running on port number 9090"))