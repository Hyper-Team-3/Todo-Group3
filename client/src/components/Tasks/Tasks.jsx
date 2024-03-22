import { useContext } from "react";
import styles from "./Tasks.module.css";
import { ThemeContext } from "../../App";

const Tasks = () => {
  const { darkMode } = useContext(ThemeContext);
  /*
  Map the json of tasks
  */

  return (
    <div className={darkMode ? styles.parentDarkM : styles.parent}>
      <div className={darkMode ? styles.taskheaderDarkM : styles.taskheader}>
        Tasks
      </div>
    </div>
  );
};

export default Tasks;
