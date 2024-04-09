import { useState } from "react";
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);

function removeToDo(indexToRemove)
{
  const newTodoList = todoLists.filter((_, index) => index !== indexToRemove);
  setTodoLists(newTodoList);
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          onClick={() => {
            setTodoLists([...todoLists, todo]);
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoLists.map((item, index) => {
            return <>
            <li id={index}>{item}</li>
            <button onClick={()=>{
              removeToDo(index)
              }}><span>Delete</span></button>
            <button onClick={()=>{
              let statusSpan = document.getElementById(`status_${index}`)
              if(statusSpan.innerHTML == "Mark Completed")
              {
                let toDoToStrikeOut = document.getElementById(index)
                toDoToStrikeOut.innerHTML = '<strike>' + toDoToStrikeOut.innerHTML + '</strike>';
                statusSpan.innerHTML = "Yet to Do"
              }
              else
              {
                let toDoToRemoveStrike = document.getElementById(index)
                toDoToRemoveStrike.innerHTML = item;
                statusSpan.innerHTML = "Mark Completed"
              }
              }}><span id={`status_${index}`}>Mark Completed</span></button>
            </>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
