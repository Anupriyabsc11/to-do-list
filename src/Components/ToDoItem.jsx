import "../App.css"
import React, { useState } from 'react';

const ToDoItem = ({ Item, deleteItem, toggleItem, editItem }) => {

  const [isCorrecting, setIsCorrecting] = useState(false);
  const [newText, setNewText] = useState(Item.text);

//function to correcting the task condent
  const handleEdit = () => {
    editItem(Item.id, newText);
    setIsCorrecting(false);
  };


    return(
        <li className={Item.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={Item.completed}
          onChange={() => toggleItem(Item.id)}
        />
        {isCorrecting ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span className='todo-content' style={{
           
            color: Item.completed ? 'red' : 'black',
            
          }}>
             {Item.completed ? 'Task Completed ✔ ': ''}
             {Item.text}
          </span>
        )}
  
        {isCorrecting ? (
          <button className="edit-button" onClick={handleEdit}>Save</button>
        ) : (
          <button className="edit-button" onClick={() => setIsCorrecting(true)}>Edit</button>
        )}
        <button  className="delete-button" onClick={() => deleteItem(Item.id)}>Delete</button>
      </li>
    );
};

export default ToDoItem;