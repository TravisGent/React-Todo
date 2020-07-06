import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div>
        {props.list.map(item => (
            <ToDo toggleItem={props.toggleItem} key={item.id} item={item} />
        ))}
        <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ToDoList;