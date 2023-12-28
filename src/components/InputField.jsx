import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const InputField = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('')
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      if (parsedTasks.length > 0) {
        setTasks(parsedTasks);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTask = tasks.filter((t) => t !== taskToDelete);
    setTasks(updatedTask);
  };

// Function to move a task from one index to another in the tasks array
const moveTask = (fromIndex, toIndex) => {
	// Create a copy of the tasks array using the spread operator
	const updatedTasks = [...tasks];

	// Use destructuring to get the task being moved and remove it from the array
	const [movedTask] = updatedTasks.splice(fromIndex, 1);

	// Insert the moved task at the new index in the array
	updatedTasks.splice(toIndex, 0, movedTask);

	// Update the state with the new order of tasks
	setTasks(updatedTasks);

	if(toIndex === 0){
		setPriority(movedTask);
	}
	setTasks(updatedTasks)
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className="input-field">
        <h1 className="text-center text-white">Todo List</h1>
        <p className="text-center text-white">Today's Date : {date.toDateString()}</p>
        <div className="input-group flex-nowrap pb-3">
          <input
            value={task}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="add task"
            aria-describedby="addon-wrapping"
          />
          <button onClick={handleAddTask} type="button" className="btn btn-success">
            Add Task +
          </button>
        </div>
        <ul className="list-group pb-3">
          {tasks.map((taskItem, index) => (
            <TodoItem
              key={index}
              task={taskItem}
              onDelete={() => handleDeleteTask(taskItem)}
              index={index}
              moveTask={moveTask}
            />
          ))}
        </ul>
      </div>
    </DndProvider>
  );
};

export default InputField;
