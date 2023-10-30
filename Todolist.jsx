import React from 'react'
import { useState } from 'react'
import todoStyle from './css/Todolist.module.css'
function Todolist() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let changeTask = ({ target: { value } }) => {
    setTask(value)
  }
  let addTask = () => {
    setTasks([...tasks, task]);
    setTask("")
    setTimeout((e) => {
      alert("added succefull")
    })
  }
  let deleteTask = (index = 2) => {
    let remainingTasks = tasks.filter((t, i) => {
      return index !== i;
    })
    setTasks(remainingTasks)
    setTimeout((e) => {
      alert("deleted succefull")
    })
  }
  return (

    <section>
      <div className='{todoStyle.input}'>
        <h2>To-Do list App by React</h2>
        <input type="text" placeholder='Add Task' onChange={changeTask} value={task} />
        <button onClick={addTask}>Add </button>

      </div>

      <div className={todoStyle.task} >
        {tasks.map((t, i) => {
          return <div key={i}>
            <span>{t}</span>
            <button onClick={() => {
              deleteTask(i)
            }} >Delete</button>
            {/* console.log("Deleted suceesufully") */}
          </div>
        })}
      </div>
    </section>
  )
}
export default Todolist
