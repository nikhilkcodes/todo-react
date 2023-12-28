import React from "react";
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Import ItemTypes

const TodoItem = ({ task, onDelete, index, moveTask }) => {
  const [, ref] = useDrag({
    type: ItemTypes.TASK,
    item: { task, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // Conditionally render the label if the index is 0
  const renderLabel = index === 0 && (
	<>
	    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    </span>
	<p className="badge rounded-pill text-bg-warning">Priority</p>
	</>
  );

  return (
	<ul className="list-group pb-3">
    <li className="list-group-item d-flex justify-content-between" ref={(node) => ref(drop(node))} >
	 {task}
	  {renderLabel}
      <button type="button" className="btn btn-danger" onClick={onDelete}>
        Delete Task
      </button>
    </li>
	</ul>
  );
};

export default TodoItem;
