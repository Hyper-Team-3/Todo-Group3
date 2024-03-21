import styles from "./Tasks.module.css";

const Tasks = () => {
  /*
  Map the json of tasks
  */

  return (
    <div className={styles.parent}>
      <div className={styles.taskheader}>Tasks</div>
      <div className={styles.task_container}>Here the task</div>
    </div>
  );
};

export default Tasks;
