var list =document.getElementById("list");


function addTodo()
{
    var todo_item=document.getElementById("todo-item");
    var li = document.createElement('li')
    li.style.borderBottom="4px solid yellow";
  li.style.listStyle="none"

    var liText = document.createTextNode(todo_item.value)
       li.appendChild(liText)
     
       //delete button


     var delBtn = document.createElement("button")
     //icon
     var taskTrash= document.createElement("i")
     taskTrash.setAttribute("class","fa fa-trash-o")
     delBtn.appendChild(taskTrash);
      
     delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    

     //create edit
      var editBtn= document.createElement("button")

      var taskEdit= document.createElement("i")
      taskEdit.setAttribute("class","fa fa-pencil-square-o")
      editBtn.appendChild(taskEdit);
     
    
      editBtn.setAttribute("class","editbutton")
      editBtn.setAttribute("onclick","editItem(this)")
    

     
     li.appendChild(delBtn)
     li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value="";
    console.log(li);

}
   function deleteItem(e)
   {
       e.parentNode.remove()

   }
   function editItem(e)
   {
       var val= prompt("enter updated value",e.parentNode.firstChild.nodeValue)
       e.parentNode.firstChild.nodeValue =val;


   }



   function deleteAll()
   {
       list.innerHTML="";
   }