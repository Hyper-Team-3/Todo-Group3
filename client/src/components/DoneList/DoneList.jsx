import { useContext } from "react";
import styles from "./DoneList.module.css";
import { ThemeContext } from "../../App";
import Task from "../Task";

const DoneList = () => {
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const filteredTasks = sortedTasks?.filter((task) => task.completed === true);

  return (
    <div
      className={
        darkMode ? `${(styles.parent, styles.parentDarkM)}` : `${styles.parent}`
      }
    >
      <div className={darkMode ? styles.taskheaderDarkM : styles.taskheader}>
        Done
      </div>
      <div className={styles.taskwrapper}>
        {filteredTasks?.map((task) => {
          return (
            <Task key={task.id} {...task} getData={getData} email={userEmail} />
          );
        })}
        <Task title="TEST" date="2024-24-24" />
      </div>
      <div className={styles.taskfooter}></div>
    </div>
  );
};

export default DoneList;
