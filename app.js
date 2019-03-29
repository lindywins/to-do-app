function onReady() {
  //declare id variable
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value){ return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      //add id property
      id: id
    });
    //increment id variable
    id++;

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      //create delete button
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      //append delete button
      newLi.appendChild(deleteBtn);

      //use delete button
      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        }
      )
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
});

  renderTheUI();
};

window.onload = function() {
  onReady();
};
