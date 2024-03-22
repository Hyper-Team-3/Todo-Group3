import styles from "./Tasks.module.css";
import Task from "./Task";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Tasks = () => {
  const { darkMode } = useContext(ThemeContext);
  // const [title, setTitle] = useState("Task title");
  // const [date, setDate] = useState("8 Mar");
  /*
  Map the json of tasks
  */
  // useEffect(() => {
  /* import tasks */
  // });

  return (
    <div className={darkMode ? styles.parentDarkM : styles.parent}>
      <div className={darkMode ? styles.taskheaderDarkM : styles.taskheader}>
        Tasks
      </div>
      <Task />
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
