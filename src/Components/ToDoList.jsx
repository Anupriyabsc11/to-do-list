import "../App.css"
import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";

function ToDoList(props){

const [newTask,setNewTask] = useState("");

////function to handle the input field
function handleInputChange(event){
    setNewTask(event.target.value);
}

//function to add new task 
function addTask(){
    if (newTask.trim() !== "") {
        props.addItem(newTask);
        setNewTask("");
      }
}

    return (
      
        <div className="to-do-list">
         
            <h1>To-Do-List</h1>
        
        <div>
        <input 
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."/>

        <button className="add-button"
          onClick={addTask}>Add</button>
        </div>
     
          <ul>
          
             {props.Items.map(Item => (<ToDoItem key={Item.id} 
             Item={Item}
             deleteItem={props.deleteItem}
             toggleItem={props.toggleItem}
             editItem={props.editItem}/>
             ))}
            
        </ul>
       
     
        </div>
       
    );
}
export default ToDoList;