
import * as React from "react";
import {useState} from "react";
import { RiTodoLine } from "react-icons/ri";
import classes from "./TasksPageContent.module.css";

function App() {
  // State Hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");
  const [style, setStyle] = useState(classes.cont);
  const [itemId, setId] = useState(0);

  // Helper Functions

  function changeStyleLow(id) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);
    setId(currentItem.id)
    setStyle(classes.lowcont);
  };

  function changeStyleMed(id) {
    console.log("you just clicked");
    setStyle(classes.medcont);
  };

  function changeStyleHigh(id) {
    setStyle(classes.highcont);
  };

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Please enter an item!");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };


    setId(item.id);

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }


  /* Deletes an item based on the 'item.id' key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);
    setId(currentItem.id)

    // Create a new item with same id
    const newItem = {
     // id: currentItem.id,
      id: itemId,
      value: newText,
    };
    
    deleteItem(id);
    setId(itemId);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);

  }

  // Main part of app
  return (
    <div className={classes.app}>
      {/* 1. Headers  */}
      <h1>Your To-Do Manager</h1>
      <div className={classes.icon}>
				<RiTodoLine />
	  </div>
      <h2>My Tasks List</h2>
      <p></p>

      {/* 2. Add new item (input) */}
      <input
        type="text"
        placeholder="Enter a task here..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Add task button */}
      <button onClick={() => addItem()}>Add Task</button>


      {/* 3. List of todos (unordered list) */}
      <ul>
        {items.map((item) => {
          return (
            <div className={style}>   
            <li key={item.id}>
                {item.value}
                <p>Item's unique ID: {item.id}</p>
                <p>*Optional: Select a Priority Level*</p>
            <button
              className= {classes.lowbutton}
              onClick={() => {
              changeStyleLow(item.id);
              }}
              >
             Low Priority
            </button>

            <button
              className={classes.medbutton}
              onClick={() => changeStyleMed(item.id)}>
             Medium Priority
            </button>

            <button
              className={classes.highbutton}
              onClick={() => changeStyleHigh(item.id)}>
             High Priority
            </button>
            <p></p>
                <button
                  className={classes.deletebutton}
                  onClick={() => deleteItem(item.id)}
                >
                  Completed! ✔️
                </button>
                <p></p>
                <button
                  className={classes.deletebutton}
                  onClick={() => deleteItem(item.id)}
                >
                  Delete Task ❌
                </button>
                <p></p>
                <button
                  className={classes.deletebutton}
                  onClick={() => setShowEdit(item.id)}
                  >
                  Edit/Update Task ✏️
                </button>
              </li>

              {showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                  <button onClick={() => editItem(item.id, item.value)}>
                    Cancel
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;