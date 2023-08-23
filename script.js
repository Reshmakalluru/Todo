

let btn=document.createElement('button');
btn.classList.add('btn');
btn.textContent='Add';
btn.addEventListener('click',addTask);
document.querySelector('.input_box').appendChild(btn);

let btn1=document.createElement('button');
btn1.classList.add('btn');
btn1.textContent='Remove';
btn1.addEventListener('click',removeAll);
document.querySelector('.input_box').appendChild(btn1);

const taskname = document.querySelector('#input_text');

function addTask(){
    let taskList=document.createElement('li');
    taskList.classList.add("task_input");
    taskList.textContent = taskname.value;
    const divele=document.createElement('div');
    divele.classList.add('list_item');
    const editIcon = document.createElement('i');
    editIcon.classList.add('bi', 'bi-pencil-square');
    editIcon.addEventListener('click', editIconClicked);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bi','bi-trash');
    deleteIcon.addEventListener('click',deleteIconClicked);

    divele.appendChild(editIcon);
    divele.appendChild(deleteIcon);
    taskList.appendChild(divele);
    
    let ul_list=document.querySelector(".list");
    ul_list.appendChild(taskList);
    taskname.value='';
}

function removeAll(){
    let taskItems=document.querySelectorAll('.task_input');
    while(taskItems.length>0){
        taskItems[0].remove();
        taskItems=document.querySelectorAll('.task_input');
    }
}

function deleteIconClicked(event){
    let taskInput=event.target.parentNode.parentNode;
    taskInput.remove();
}

function editIconClicked(event){
    let editTask=event.target.parentNode.parentNode;
    let newname=prompt("Enter the new task name");
    if(newname){
        editTask.textContent=newname;
    }
}