import { useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./Modal.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Modal = ({ mode, setShowModal, getData, task }) => {
  const { darkMode } = useContext(ThemeContext);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : "",
    progress: editMode ? task.progress : 10,
    date: editMode ? task.date : new Date().toLocaleDateString(),
    completed: editMode ? task.completed : false,
  });

  async function postData(e) {
    e.preventDefault();
    if (data.title === "") return;
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVERURL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", "authorization": `Bearer ${cookies.AuthToken}`
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function editData(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${task.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", "authorization": `Bearer ${cookies.AuthToken}`
          },

          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "progress") {
      const completed = parseInt(value) === 100 ? true : false;
      setData((data) => ({
        ...data,
        [name]: value,
        completed: completed,
      }));
    } else {
      setData((data) => ({
        ...data,
        [name]: value,
      }));
    }
  }

  return (
    <div className={styles.parent}>
      <div
        className={styles.background}
        onClick={() => setShowModal(false)}
      ></div>

      <div className={darkMode ? styles.modalwindowDarkM : styles.modalwindow}>
        <div className="flex justify-between">
          <h3>Let's {mode} your task</h3>
          <button className="text-red-500" onClick={() => setShowModal(false)}>CLOSE</button>
        </div>
        <form className="flex flex-col gap-4">
          <input
            className="my-[11px] py-3 px-4 rounded-[12px] border-solid border-[1.5px] border-[#e6e8ec] text-black"
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <label htmlFor="range">Drag to select your current progress</label>
          <input
            className="mb-3"
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input
            className="border-none text-white bg-indigo-700 uppercase self-center px-6 py-2"
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
}

export default Modal;

/*

export default function Modal({ mode, setShowModal, getData, task }) {

}
*/