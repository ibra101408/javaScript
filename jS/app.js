const form = document.querySelector('form');

form.addEventListener('submit', addTask);

function  addTask(event){
    const taskInput = document.querySelector('#task');
    let task = taskInput.value;
    console.log(task);

    // create <li> element
    const li = document.createElement('li');

    //add css class
    li.className = 'collection-item';

    //create text element
    const text = document.createTextNode(task);
    li.appendChild(text);
    //console.log(text);

    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    event.preventDefault();



    event.preventDefault()
}

