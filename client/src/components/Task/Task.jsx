import styles from "./Task.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useCookies } from "react-cookie";
import { ThemeContext } from "../../App";
import { useContext } from "react";

function Task({ email, title, date, id, progress, completed, getData, task }) {
  const { darkMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  async function handleComplete(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
            user_email: cookies.Email,
            title: title,
            progress: progress,
            date: date,
            completed: !completed,
          }),
        }
      );
      if (response.status === 200) {
        console.log("worked");
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  console.log(title, "title");
  console.log(completed, "completed");

  return (
    <div className={darkMode ? styles.parentDarkM : styles.parent}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.checkbutton} onClick={handleComplete}>
          <RiCheckboxCircleLine size="25" color="gray" />
        </button>
        {!completed && (
          <button className="edit" onClick={() => setShowModal(true)}>
            EDIT
          </button>
        )}
        <button className={styles.deletebutton} onClick={handleDelete}>
          <FaRegTrashCan size="20" color="gray" />
        </button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </div>
  );
}

export default Task;

/*
        <button className={styles.checkbutton} onClick={handleComplete}>
          <RiCheckboxCircleLine size="25" color="gray"/>
        </button>
        {!completed && <button className="edit" onClick={()=>setShowModal(true)}>EDIT</button>}
        <button className={styles.deletebutton} onClick={handleDelete}>
          <FaRegTrashCan size="20" color="gray"/>
        </button>
*/