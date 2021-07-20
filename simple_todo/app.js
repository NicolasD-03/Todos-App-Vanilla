const todos = document.querySelector('.todos');
const textInput = document.querySelector('div input');
const form = document.querySelector('form')

let id = 0;

const createTodo = function(content){

    id++;

    const todo = document.createElement('div');
    todo.classList.add('todo');

    // Todo check state 
    const todoCheck = document.createElement('div');
    todoCheck.classList.add('todo-check');
    
    const checkBoxNodeTree = `
    <input id="todo-${ id }" type="checkbox">
    <label for="todo-${ id }">
        <svg><use xlink:href="#check"></use></svg>
    </label>
    `;
    todoCheck.innerHTML = checkBoxNodeTree;

    // Todo text content
    const todoContent = document.createElement('div');
    todoContent.classList.add('todo-content')
    todoContent.innerText = content;


    // Todo clear button
    const todoClear = document.createElement('div');
    todoClear.classList.add('todo-clear')

    const deleteNodeTree = `
        <svg><use xlink:href="#delete"></use></svg>
    `;
    todoClear.innerHTML = deleteNodeTree;

    todo.appendChild(todoCheck);
    todo.appendChild(todoContent);
    todo.appendChild(todoClear);

    todo.querySelector('.todo-check').addEventListener('change', () => {
        updateTodoState(todo);
    });

    todo.querySelector('.todo-clear').addEventListener('click', () => {
        deleteTodo(todo);
    });

    return todo;
}

const addTodo = function(todo){
    todos.prepend(todo);
}

const updateTodoState = function(todo){
    todo.classList.toggle('done');
}

const deleteTodo = function(todo){
    todo.remove();
}

form.addEventListener('submit', (e) =>{
    const { value } = textInput;
    textInput.value = '';
    const todo = createTodo(value)
    addTodo(todo);
    e.preventDefault();


})
