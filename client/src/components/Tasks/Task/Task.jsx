import styles from "./Task.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import { useCookies } from "react-cookie";

function Task({ title, date, id, progress, completed, getData, task }) {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  console.log("task task", task);

  async function handleComplete(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-token": cookies.AuthToken,
          },
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
          headers: {
            "X-Token": cookies.AuthToken,
          },
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className={styles.parent}>
      <div className={styles.color}></div>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
      <div className="row-span-2 flex items-center justify-around">
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
