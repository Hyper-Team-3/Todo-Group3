import styles from "./DoneTasks.module.css"
import DoneTask from "./DoneTask";

const DoneTasks = () => {
  /*
  Map Done Tasks
  */

  return (
    <div className={styles.parent}>
        <div className={styles.taskheader}>Done</div>
        <DoneTask />
    </div>
  )
}

export default DoneTasks;
