
var i = 1;
function addTask(){
    var clientName = document.getElementById("client").value;
    var projectName = document.getElementById("project").value;
    var budget = document.getElementById("budget").value;

    let task = {
        clientName: clientName,
        projectName: projectName,
        budget: budget
    }

    sessionStorage.setItem("obj" + i++, JSON.stringify(task));

    alert("Added task number " + i)

}

function showTask(){
    

}
