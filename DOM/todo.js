const inputDom = document.getElementById("todo-input");
const buttonDom = document.getElementById("todo-button");
const todoListDom = document.getElementById("todo-list");

let todoText = "";

inputDom.addEventListener("input", (e) => {
  todoText = e.target.value;
});

buttonDom.addEventListener("click", () => {
  const todoTextDom = document.createElement("li");
  todoTextDom.innerText = todoText;
  todoListDom.appendChild(todoTextDom);
  // 초기화 로직
  todoText = "";
  inputDom.value = "<div class='hi'>hello</div>";
});
