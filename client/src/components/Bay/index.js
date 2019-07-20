import React from "react";
import "./style.css";
import TaskItem from "../TaskItem";

// Called/Used in Garage page.

const Bay = (props) => {
  console.log("Tasks",props.tasks);
  return(
    <div className="bay-block">
      {props.tasks.map(task => (<TaskItem key={task.key}
                                          id={task.key}
                                          name={task.name} 
                                          duration={task.duration}
                                          onTaskClickHandler={props.onTaskClickHandler}
                                          type={task.type}/>))}
    </div>
  );
}

export default Bay;