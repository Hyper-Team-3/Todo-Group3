import styles from "./DoneTask.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

const DoneTask = () => {

    return (
        <div className={styles.parent}>
        <div className={styles.color}></div>
        <p className={styles.title}>Title</p>
        <p className={styles.date}>Date</p>
        <div className="row-span-2 flex items-center justify-around">
          <button className={styles.checkbutton}>
          <RiCheckboxCircleLine size="25" color="gray"/>
          </button>
          <button className={styles.deletebutton}>
            <FaRegTrashCan size="20" color="gray"/>
          </button>
        </div>
      </div>
    )
}

export default DoneTask;