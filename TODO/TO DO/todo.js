const user =  JSON.parse(localStorage.getItem('user'))
console.log (user.firstName)
const header = document.querySelector('.header')
header.innerText = `Ваши задачи, ${user.firstName}`



const TodoList = document.querySelector ('.todoList')
const inputBOX = document.querySelector ('.inputik input')
const addBtn = document.querySelector ('.inputik button')
const deleteAllBtn = document.querySelector('.footer button')
inputBOX.onkeyup = () => {
    let UserData= inputBOX.value;
    if (UserData.trim() !=0) {
        addBtn.classList.add('active');
    }
    else {
        addBtn.classList.remove('active');
    }
}
addTasks()
addBtn.onclick = () => {
    let UserData= inputBOX.value;   
    let getLocalStorage = localStorage.getItem('NewTodo');
    console.log (getLocalStorage)
    if (getLocalStorage == null){
        Arr = [];
    }
    else {
        Arr = JSON.parse(getLocalStorage)
    }
    Arr.push (UserData)
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()

}
function addTasks() {
    let getLocalStorage = localStorage.getItem('NewTodo');
    if (getLocalStorage == null){
        Arr = [];
    }
    else {
        Arr = JSON.parse(getLocalStorage)
    }
    let li = '';
    Arr.forEach((element, index) => {
        li += ` <li>${element}<span class="selects"><select class = "select"><option value="high">Срочно!</option><option value="normal">Надо выполнить</option><option value="small">Подождёт</option></select></span> <span onclick="deleteTask(${index})";><span class = "icon"><i class="fa fa-trash"></i><span></span></span></li>`
    });
    TodoList.innerHTML = (li)
    inputBOX.value = ""
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('NewTodo');
    Arr = JSON.parse(getLocalStorage)
    Arr.splice (index,1);
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()
}

deleteAllBtn.onclick = () => {
    Arr = [];
    localStorage.setItem ('NewTodo', JSON.stringify(Arr))
    addTasks()
}