import { useContext } from "react";
import styles from "./DoneTasks.module.css";
import { ThemeContext } from "../../App";

const DoneTasks = () => {
  const { darkMode } = useContext(ThemeContext);
  /*
  Map Done Tasks
  */

  return (
    <div className={darkMode ? styles.parentDarkM : styles.parent}>
      <div className={darkMode ? styles.taskheaderDarkM : styles.taskheader}>
        Done
      </div>
    </div>
  );
};

export default DoneTasks;
