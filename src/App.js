import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState(data.data);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");

  // add
  const submit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodo([...todo, input]);
      setInput("");
    } else {
      alert("Please enter Todo List");
    }
    console.log(todo);
  };

  // callback truyen item tu con -> cha

  const callbackFunction = (childData, isEdit) => {
    console.log(todo);
    if (!isEdit) {
      const fill = todo.filter((item) => {
        return item !== childData;
      });
      setTodo(fill);
    } else {
      setInput(childData);
      setEdit(childData);
    }
  };

  // Edit
  const handleEdit = (e) => {
    e.preventDefault();
    todo.map((item, key) => {
      if (edit === item) {
        todo[key] = input;
        setInput("");
      }
      setTodo(todo);
    });
    callbackFunction();
  };
  return (
    <div className="App">
      {/**header */}
      <header className="header">
        <h1 className="title-app"> work to-dos</h1>
        <p className="title-content color-1">
          Enter text into the input field to add items to your list
        </p>
        <p className="title-content color-2">
          Click the item to mark it as complete
        </p>
        <p className="title-content color-3">
          Click the "X" to remove the item from your list
        </p>
      </header>
      {/**form input */}
      <form onSubmit={submit}>
        <input
          type="text"
          className="input-item"
          placeholder="New item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button variant="contained" onClick={handleEdit}>
          <EditIcon />
        </Button>
      </form>
      {/**todo list */}
      <div className="todo-list">
        {todo.sort().map((item) => (
          <Todo item={item} parentCallback={callbackFunction} />
        ))}
      </div>
    </div>
  );
}

export default App;
