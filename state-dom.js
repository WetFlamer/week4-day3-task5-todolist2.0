const todo_massiv = 
[
  
]
// РЕНДЕР ЭЛЕМЕНТОВ
const render = (todos) => {
    const list = document.getElementById('list')
    list.textContent = ''
    for(let i = 0; i < todos.length; i++){
        const p = document.createElement('p')
        p.textContent = todo_massiv[i].text
        list.append(p)
    }
}

// УДАЛЕНИЕ ЭЛЕМЕНТА МАССИВА
const remove = (index) => {
    todo_massiv.splice(index, 1)
    render(todo_massiv)
}

// ДОБАВЛЕНИЕ ЭЛЕМЕНТА В МАССИВ
const addTodo = (textS) => {
    todo_massiv.push({text: textS, done: true})
    render(todo_massiv)
}

document.getElementById('form').addEventListener('submit', (e) => {
  
  e.preventDefault();

  const formInput = document.getElementById('input');

  addTodo(formInput.value);

  formInput.value = "";
})
render(todo_massiv);