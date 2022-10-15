const AddToDoList =document.getElementById('AddToDoList');
const toDoContainer =document.getElementById('toDoContainer');
const InputsField =document.getElementById('InputsField');

AddToDoList.addEventListener('click',function()
{
    const lists=document.createElement('p');
    lists.innerText = InputsField.value;
    lists.classList.add('paragraphStyle')
    toDoContainer.appendChild(lists);
    InputsField.value="";
    lists.addEventListener('click',function(){
        lists.style.textDecoration='line-through'
    })
    lists.addEventListener('dblclick',function(){
        //lists.remove();
        toDoContainer.removeChild(lists);
    })
   
}

)