// HTML 요소를 DOM 객체로 가져옴
const inputDom = document.getElementById("todo-input");
const buttonDom = document.getElementById("todo-button");
const todoListDom = document.getElementById("todo-list");
// 할 일 텍스트 및 할 일 목록 초기화
let todoText = "";
const todoList = JSON.parse(window.sessionStorage.getItem("todoList")) || [];

// 다음 할 일의 ID 값을 설정
//[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
let todoId = todoList[todoList.length - 1]
  ? todoList[todoList.length - 1].id + 1
  : 0;

// 할 일 목록을 세션 저장소에 저장하는 함수
const saveTodoList = () => {
  window.sessionStorage.setItem("todoList", JSON.stringify(todoList));
};
// 할 일 텍스트 입력 필드 초기화 함수
const resetTextInput = () => {
  todoText = "";
  inputDom.value = "";
};

// 할 일 목록을 화면에 표시하는 함수
const renderTodoList = () => {
  todoListDom.innerHTML = "";
  // 할 일 목록을 담고 있는 요소의 내용을 비우는 코드. 이렇게 하면 이전 목록이 지워지고 새로운 목록이 추가될 때 깔끔하게 보임.
  // todoList.forEach((todo) => {
  //   const todoItemDom = createdTodoItemDom(todo);
  //   todoListDom.appendChild(todoItemDom);
  // });
  for (let i = 0; todoList.length > i; i++) {
    const todoItemDom = createdTodoItemDom(todoList[i]);
    todoListDom.appendChild(todoItemDom);
  }
};
// 각 할 일을 나타내는 DOM 요소를 생성하는 함수 (완료 처리 및 삭제 기능 포함)
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
// 할 일을 추가하는 함수
const addTodo = () => {
  const newTodoObj = { id: todoId++, text: todoText, isDone: false };
  todoList.push(newTodoObj);
  renderTodoList();
  resetTextInput();
  saveTodoList();
};

// 입력된 할 일 텍스트를 변경하는 함수
const changeTodoText = (event) => {
  todoText = event.target.value;
};

// 이벤트 리스너 설정
inputDom.addEventListener("input", changeTodoText);
buttonDom.addEventListener("click", addTodo);

// 초기 할 일 목록 표시
renderTodoList();
