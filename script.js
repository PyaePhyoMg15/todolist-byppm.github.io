const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList")
const deleteAllBtn = document.querySelector(".footer button")


inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}


addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStrage = localStorage.getItem("New Todo");
    if (getLocalStrage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStrage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTask();
}


function showTask () {
    let getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    if (listArr.length > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }

    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += ` <li>${element}<span onclick="deleteTask(${index})"; ><i class="fa fa-check"></i></span></li>`
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index , 1);
    localStorage.setItem("New Todo" ,  JSON.stringify(listArr)); 
    showTask();
}


deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTask();
}