import styles from "./Task.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { GrRevert } from "react-icons/gr";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useCookies } from "react-cookie";
import { ThemeContext } from "../../App";
import { useContext, useEffect } from "react";

function Task({ email, title, date, id, progress, completed, getData, task }) {
  const [transition, setTransition] = useState(styles.opacity0);
  const { darkMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);

useEffect(() => {
  const timeout = setTimeout(() => {
    setTransition(styles.opacity1);
}, 50)

return () => clearTimeout(timeout);
}, []);

  async function handleComplete(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", "authorization": `Bearer ${cookies.AuthToken}` },
          body: JSON.stringify({
            id: id,
            user_email: cookies.Email,
            title: title,
            progress: 100,
            date: date,
            completed: !completed,
          }),
        }
      );
      if (response.status === 200) {
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
          headers: { "authorization": `Bearer ${cookies.AuthToken}` },
        }
      );
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  const colors = () => {
    if (progress < 30) {
      return "border-l-red-600";
    }
    if (progress >= 30 && progress <= 70) {
      return "border-l-yellow-600";
    } else {
      return "border-l-green-600";
    }
  };

  return (
    <div className={`m-6 rounded-lg flex justify-between pr-8 transition-all duration-500 ease-in-out ${darkMode ? "bg-[#3a3a3a] text-white" : "bg-gray-200 text-gray-500 "}`}>
      <div className={`row-span-2 border-l-8 ${colors()} rounded-l`}></div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.buttons}>
          {completed && (
            <button className={styles.checkbutton} onClick={handleComplete}>
              <GrRevert size="20" color="gray" />
            </button>
          )}
          {!completed && (
            <>
              <button className={styles.checkbutton} onClick={handleComplete}>
                <RiCheckboxCircleLine size="25" color="gray" />
              </button>
              <button className="edit" onClick={() => setShowModal(true)}>
                EDIT
              </button>
            </>
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
    </div>
  );
}

export default Task;
