import { useContext } from "react";
import styles from "./DoneTasks.module.css";
import { ThemeContext } from "../../App";
import DoneTask from "./DoneTask"

const DoneTasks = () => {
  const { darkMode } = useContext(ThemeContext);
  /*
  Map Done Tasks
  */

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
      </div>
      <div className={styles.taskfooter}></div>
    </div>
  );
};

export default DoneTasks;
