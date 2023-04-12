const inputDom = document.getElementById("todo-input");
const buttonDom = document.getElementById("todo-button");
const todoListDom = document.getElementById("todo-list");
let todoText = "";
const todoList = JSON.parse(window.sessionStorage.getItem("todoList")) || [];
//[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
let todoId = todoList[todoList.length - 1] // 마지막인덱스 표시
  ? todoList[todoList.length - 1].id + 1
  : 0;

const saveTodoList = () => {
  window.sessionStorage.setItem("todoList", JSON.stringify(todoList));
};

const resetTextInput = () => {
  todoText = "";
  inputDom.value = "";
};

const renderTodoList = () => {
  todoListDom.innerHTML = "";
  // todoList.forEach((todo) => {
  //   const todoItemDom = createdTodoItemDom(todo);
  //   todoListDom.appendChild(todoItemDom);
  // });
  for (let i = 0; todoList.length > i; i++) {
    const todoItemDom = createdTodoItemDom(todoList[i]);
    todoListDom.appendChild(todoItemDom);
  }
};

const createdTodoItemDom = ({ isDone, text, id }) => {
  const todoWrapDom = document.createElement("div");
  const todoTextDom = document.createElement("span");
  const todoCheckDom = document.createElement("input");
  const todoDeleteButton = document.createElement("button");

  todoDeleteButton.innerText = "삭제";
  todoCheckDom.type = "checkbox";
  todoCheckDom.checked = isDone;
  todoTextDom.innerText = text;
  todoCheckDom.addEventListener("click", () => {
    for (let i = 0; todoList.length > i; i++) {
      if (todoList[i].id === id) {
        todoList[i].isDone = !todoList[i].isDone;
      }
    }
    saveTodoList();
    renderTodoList();
  });
  todoDeleteButton.addEventListener("click", () => {
    // 특정 id로 필터링 한뒤
    // todoList에 업데이트 한다.
    const filterTodoList = todoList.filter((todo) => todo.id !== id); // todo.id가 id와 같지 않은것만 필터링
    // 인즉 삭제를 한다.
    todoList.splice(0, todoList.length, ...filterTodoList);
    saveTodoList();
    renderTodoList();
  });

  todoWrapDom.appendChild(todoDeleteButton);
  todoWrapDom.appendChild(todoCheckDom);
  todoWrapDom.appendChild(todoTextDom);
  return todoWrapDom;
};

const addTodo = () => {
  const newTodoObj = { id: todoId++, text: todoText, isDone: false };
  todoList.push(newTodoObj);
  renderTodoList();
  resetTextInput();
  saveTodoList();
};

const changeTodoText = (event) => {
  todoText = event.target.value;
};

inputDom.addEventListener("input", changeTodoText);

buttonDom.addEventListener("click", addTodo);

// 할일을 완료처리 / done 처리

// 할 일 삭제 기능: 할 일을 목록에서 삭제할 수 있는 버튼.

// 필터 기능: 전체 할 일, 완료된 할 일, 미완료 할 일 등 다양한 카테고리로 목록을 필터링 할 수 있는 기능.

// 저장 및 로드 기능: 할 일 목록을 로컬 스토리지에 저장하고, 앱을 다시 실행할 때 로드 할 수 있는 기능.

renderTodoList();
