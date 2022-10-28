
import * as React from "react";
import {useState, useEffect} from "react";
import { RiTodoLine } from "react-icons/ri";
import classes from "./TasksPageContent.module.css";

function Task({ task, index, completeTask, deleteTask }) {
  return (
      <div
          className="task"
          style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
          {task.title}

          {/*
          IMPORTANT: When ready, create a useState variable for indexing
          <text>     (task index = {index})</text>
          */}
          

          <button style={{ background: "#FF6347" }} onClick={() => deleteTask(index)}>Delete X</button>
          <button style={{ background: "#8FBC8F" }} onClick={() => completeTask(index)}>Complete ✓</button>

      </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTask(value);
      setValue("");
  }
  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              className="input"
              value={value}
              placeholder="Add a new task..."
              onChange={e => setValue(e.target.value)}
          />
          <button className={classes.addButton} onClick={handleSubmit}>Add Task</button>
      </form>
  );
}

function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasksDone, setTasksDone] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });
  useEffect(() => { setTasksDone(tasks.filter(task => task.completed).length) });

  const addTask = title => {
      const newTasks = [...tasks, { title, completed: false }];
      setTasks(newTasks);
  };


  const completeTask = index => {
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
  };

  const deleteTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
  };



  return (
         <div className={classes.App}>
         <div className={classes.icon}>
         <RiTodoLine />
         </div>
         <div className={classes.todoContainer}>
         <div className={classes.bigHeader}> Your To-Do List</div>
          <div className={classes.header}> Number of Tasks Left to Complete: ({tasksRemaining})</div>
          <div className={classes.header}> Number of Tasks Completed: ({tasksDone})</div>
          <div className={classes.task}>
              {tasks.map((task, index) => (
                  <Task
                  task={task}
                  index={index}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  key={index}
                  />
              ))}
          </div>
          <div className="create-task" >
              <CreateTask addTask={addTask} />
          </div>
      </div>
      </div>
  );
}

export default App;