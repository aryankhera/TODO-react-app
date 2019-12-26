const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let todo= prompt('Enter new TODO','todo');
  div=document.createElement('div');
  li=document.createElement('li');
  del=document.createElement('button');
  del.className=classNames.TODO_DELETE;
  del.innerHTML="X";
  input=document.createElement('input');
  input.type="checkbox";
  input.className=classNames.TODO_CHECKBOX;
  div.className=classNames.TODO_ITEM;
  li.className=classNames.TODO_TEXT;
  itemCountSpan.innerText=parseInt(itemCountSpan.innerText)+1;
  uncheckedCountSpan.innerText=parseInt(uncheckedCountSpan.innerText)+1;
  input.addEventListener('change',function(){
    if(this.checked){
      uncheckedCountSpan.innerText=parseInt(uncheckedCountSpan.innerText)-1;
      this.parentNode.classList.add("completed");
    }
    else{
      uncheckedCountSpan.innerText=parseInt(uncheckedCountSpan.innerText)+1;
      this.parentNode.classList.remove("completed");
    }
  });
  del.addEventListener('click',function(){
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  });
  li.innerHTML=todo;
  li.append(input);
  li.append(del);
  div.append(li);
  list.append(div);
}
