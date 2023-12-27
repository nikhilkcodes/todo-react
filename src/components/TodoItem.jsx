import React from "react";

const TodoItem = ({task, onDelete}) => {
	return (
		<>
			<ul className="list-group pb-3">
				<li className="list-group-item d-flex justify-content-between">
					{task}
					<button type="button" className="btn btn-danger" onClick={onDelete}>Delete Task</button>
				</li>
			</ul>
		</>
	)
}

export default TodoItem
