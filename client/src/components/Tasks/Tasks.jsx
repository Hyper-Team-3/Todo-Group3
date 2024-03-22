import styles from "./Tasks.module.css"
import Task from "./Task"

const Tasks = () => {
  /*
  Map the json of tasks
  */

  return (
    <div className={styles.parent}>
        <div className={styles.taskheader}>Tasks</div>
        <Task />
    </div>
  )
}

export default Tasks;
