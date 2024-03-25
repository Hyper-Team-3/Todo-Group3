import styles from "./TaskList.module.css";
import Task from "../Task";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import Modal from "../Modal/Modal";

const TaskList = () => {
  const [showModal, setShowModal] = useState(false);
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const filteredTasks = sortedTasks?.filter((task) => task.completed === false);

  return (
    <div className={darkMode ? styles.parentDarkM : styles.parent}>
      <div className={darkMode ? styles.taskheaderDarkM : styles.taskheader}>
        Tasks
      </div>
      <div className={darkMode ? styles.taskwrapperDarkM : styles.taskwrapper}>
        {filteredTasks?.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              getData={getData}
              email={userEmail}
              task={task}
            />
          );
        })}
      </div>
      <div className={darkMode ? styles.taskfooterDarkM : styles.taskfooter}>
        <button onClick={() => setShowModal(true)}>+ Add New</button>
      </div>
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default TaskList;