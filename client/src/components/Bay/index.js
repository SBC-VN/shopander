import React from "react";
import "./style.css";
import TaskItem from "../TaskItem";

const Bay = (props) => {
  console.log(props)
  console.log("Tasks", props.tasks);
  return(
    <div className="bay-block">
      {props.tasks.map(task => (<TaskItem key={task.key} 
                                          name={task.name} 
                                          duration={task.duration}
                                          type={task.type}/>))}
    </div>
  );
}

export default Bay;