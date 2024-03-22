import styles from "./Task.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

const Task = () => {
  const handleComplete = () => {
    /* Move Task to DoneTask */
  }

  const handleDelete = () => {
    /* Delete Task from database */
  }

  return (
    <div className={styles.parent}>
      <div className={styles.color}></div>
      <p className={styles.title}>Title</p>
      <p className={styles.date}>Date</p>
      <div className="row-span-2 flex items-center justify-around">
        <button className={styles.checkbutton} onClick={handleComplete}>
          <RiCheckboxCircleLine size="25" color="gray"/>
        </button>
        <button className={styles.deletebutton} onClick={handleDelete}>
          <FaRegTrashCan size="20" color="gray"/>
        </button>
      </div>
    </div>
  );
};

export default Task;
