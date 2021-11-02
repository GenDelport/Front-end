//On click new task in Create New Project
function newTask(){
    var newtextbox = '';
    var assignee ='';
    var date ='';
    var deleteTask = '';
    newtextbox += '<input placeholder="Insert Task" type="text" id="textInput"/>';
    assignee += '<button onclick="pickAssignee" value= "Assignee"> Assignee </button>';
    date += '<button onclick="pickDate" value= "Pick Date">Date</button>';
    deleteTask += '<button onclick="delete" id="delete">Delete</button>';
    document.getElementById('tbox_div').innerHTML+=newtextbox;
    document.getElementById('tbox_div').innerHTML+=assignee;
    document.getElementById('tbox_div').innerHTML+=date;
    document.getElementById('tbox_div').innerHTML+=deleteTask;
}

function searchStudent() {
    var newtextbox = '';
    newtextbox += '<input type="text" id ="textInput" value ="Insert Task" />';
    document.getElementById('select_div').innerHTML += newtextbox;
}

function deleteTask(){
    var deleteMe = document.getElementById("delete");
}