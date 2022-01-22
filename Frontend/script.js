

const allItemsList=document.querySelector(".allItems");
const body=document.querySelector("body");
const loader=document.querySelector(".loader");
const submitButton=document.querySelector("#submitButton");
const inputField=document.querySelector("#item-input");
const allItemsListBody=document.createElement('ul');
allItemsListBody.style.listStyle="none";
let isLoading=true;
let allLists=[];

//default Render
render();



fetch("https://jsonplaceholder.typicode.com/todos")
.then(response=>response.json())
.then(data=>{
    isLoading=false;
   allLists=[...data];
   removeLoader();
   render();
});




function render()
{
    //remove existing content
    allItemsListBody.innerHTML='';

    if(isLoading)
    {
        showLoader();
    }
    else
    {
        showData();
    }
}

function handleAddItem()
{
    //create a new TodoItem
    const newItem= {
        userId: revisedRandId(),
        id: revisedRandId(),
        title:inputField.value,
        completed:false
      }

      allItemsListBody.appendChild(createListItem(newItem.title,newItem.completed,newItem.id));
      allLists.push(newItem);
}

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}


submitButton.addEventListener("click",handleAddItem);

function removeLoader()
{
    loader.innerHTML='';

}


function createLoader()
{
    const loaderElement=document.createElement('div');
    const textNode=document.createElement('p');
    textNode.textContent="Loading...";
    loaderElement.appendChild(textNode);
    return loaderElement;
}

function showLoader()
{
    //create a loader
    const loaderElement=createLoader();
    loader.appendChild(loaderElement);
}


function showData()
{
  

    allLists.forEach((todoItem)=>{
        const newListItem=createListItem(todoItem.title,todoItem.completed,todoItem.id);
        allItemsListBody.appendChild(newListItem);
    });

    allItemsList.appendChild(allItemsListBody);
}

function onMarkClick(event)
{
    const listId=event.srcElement.parentNode.id;

    toggleBehavior(listId);

}

function toggleBehavior(id)
{
    allLists.forEach((list)=>{
        if(list.id==id)
        {
            list.completed=!list.completed;
        }
    })

    render();
}

function onDeleteClick(event)
{
    const listId=event.srcElement.parentNode.id;

    //filter

    allLists=allLists.filter((list)=>{
        return list.id!=listId;
    });


    render();
}





function createListItem(title,completed,id)
{
    const newTodoItem=document.createElement('li');
    newTodoItem.setAttribute("id",id);
    newTodoItem.style='padding:5px 10px;margin:1px 1px;color:white;font-size:30px';
    newTodoItem.style.backgroundColor=(completed)?"green":"red";

    const newPara=document.createElement('p');
    newPara.textContent=title;

    const button=document.createElement('button');
    button.textContent= (completed)?"Mark as Incomplete":"Mark as Completed";
    button.addEventListener('click',onMarkClick);

    const deleteButton=document.createElement('button');
    deleteButton.textContent= "Delete";
    deleteButton.addEventListener('click',onDeleteClick);

    newTodoItem.appendChild(newPara);
    newTodoItem.appendChild(button);
    newTodoItem.appendChild(deleteButton);




    return newTodoItem;
}







