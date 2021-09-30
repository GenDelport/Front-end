//On click new task in Create New Project
function newTask(){
    var newtextbox = '';
    var assignee ='';
    var date ='';
    newtextbox += '<input type="text" id="textInput" value="Insert Task" />';
    assignee += '<button onclick="pickAssignee" value= "Assignee"> Assignee </button>';
    date += '<button onclick="pickDate" value= "Pick Date">Date</button>';
    document.getElementById('tbox_div').innerHTML+=newtextbox;
    document.getElementById('tbox_div').innerHTML+=assignee;
    document.getElementById('tbox_div').innerHTML+=date;
}