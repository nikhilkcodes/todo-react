import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const InputField = () => {

	const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		// Load tasks from local storage on component mount
		const storedTasks = localStorage.getItem('tasks');
		console.log('Stored tasks (before):', storedTasks);
		if (storedTasks) {
		  const parsedTasks = JSON.parse(storedTasks);
		  if (parsedTasks.length > 0) {
			setTasks(parsedTasks);
		  }
		}
		console.log('Stored tasks (after):', tasks);
	  }, []);

	  useEffect(() => {
		// Save tasks to local storage whenever tasks change
		localStorage.setItem('tasks', JSON.stringify(tasks));
		console.log('Updated tasks:', tasks);
	  }, [tasks]);

	  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);
		return () => clearInterval(intervalId)
	  }, [])

	const handleInputChange = (e) => {
		setTask(e.target.value);
	}

	const handleAddTask = () => {
		if (task.trim() !== '') {
		  setTasks((prevTasks) => [...prevTasks, task]);
		  //clear the input field after adding task
		  setTask('');
		}
	  };

	const handleDeleteTask = (tasktoDelete) => {
		const updatedTask = tasks.filter((t) => t !== tasktoDelete);
		setTasks(updatedTask);
	}

	return (
		<>
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
				<button onClick={handleAddTask} type="button" className="btn btn-success">Add Task + </button>
			</div>
		{tasks.map((taskItem, index) => (
          <TodoItem key={index} task={taskItem} onDelete={() => handleDeleteTask(taskItem)} />
        ))}
		</div>
		</>
	)
}
export default InputField
