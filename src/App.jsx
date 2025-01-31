import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import React, { useState } from 'react';

function App() {
  const [Items, setItems] = useState([
    { id: 1, text: "Wake up and shower", completed: false },
    { id: 2, text: "Eat Breakfast", completed: false },
    { id: 3, text: "Get Ready to college", completed: false }
  ]);
  const [nextId, setNextId] = useState(4); 

//function to handle the addItem
  const addItem = (text) => {
    const newItem = { id: nextId, text, completed: false };
    setItems([...Items, newItem]);
    setNextId(nextId + 1);
  };

//function to handle the deleteItem
  const deleteItem = (id) => {
    setItems(Items.filter(Item => Item.id !== id));
  };

//function to handle the Item task completed or not
  const toggleItem = (id) => {
    setItems(
      Items.map(Item =>
        Item.id === id ? { ...Item, completed: !Item.completed } : Item)
    );
  };

//function to modify the Item task 
  const editItem = (id, newText) => {
    setItems(
      Items.map(Item =>
        Item.id === id ? { ...Item, text: newText } : Item)
    );
  };

  return (
    <div className="app-Component">
      <Header/>
      <ToDoList 
        Items={Items}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
