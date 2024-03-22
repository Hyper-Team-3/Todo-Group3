import { useEffect, useState } from "react";
import styles from "./Tasks.module.css";
import Task from "./Task";

const Tasks = () => {
  const [title, setTitle] = useState("Task title");
  const [date, setDate] = useState("8 Mar");

  useEffect(() => {
    /* import tasks */
  }) 

  return (
    <div className={styles.parent}>
      <div className={styles.tasksheader}>Tasks</div>
      <div className={styles.taskwrapper}>
        <Task />
      </div>
      <div className={styles.taskfooter}>
        <button>+ Add New</button>
      </div>
    </div>
  );
};

export default Tasks;

/* 
  map tasks in taskwrapper
  drill task title and task date
*/ 