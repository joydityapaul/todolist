import { useState } from "react";
import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [toDoStatus, setToDoStatus] = useState('Mark Completed');

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
              if(toDoStatus == "Mark Completed")
              {
                let toDoToStrikeOut = document.getElementById(index)
                toDoToStrikeOut.innerHTML = '<strike>' + toDoToStrikeOut.innerHTML + '</strike>';
                setToDoStatus("Yet to Do")
              }
              else
              {
                let toDoToRemoveStrike = document.getElementById(index)
                toDoToRemoveStrike.innerHTML = item;
                setToDoStatus("Mark Completed")
              }
              }}><span>{toDoStatus}</span></button>
            </>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
