import { useState } from "react";
import { useCookies } from "react-cookie";

export default function Modal({ mode, setShowModal, getData, task }) {
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
          "Content-Type": "application/json",
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
            "Content-Type": "application/json",
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
    <div className="absolute left-0 top-0 w-lvw h-lvh flex items-center justify-center">
      <div
        className="absolute left-0 top-0 w-lvw h-lvh bg-[#00000080] flex items-center justify-center"
        onClick={() => setShowModal(false)}
      ></div>

      <div className="absolute md:w-[50vw] w-[95vw] max-w-[50rem] bg-white p-[2.5rem] rounded-[10px] shadow-lg">
        <div className="flex justify-between">
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
        <form className="flex flex-col gap-4">
          <input
            className="my-[11px] py-3 px-4 rounded-[12px] border-solid border-[1.5px] border-[#e6e8ec]"
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
            className="border-none text-white bg-[#5b3de1] uppercase self-center px-6 py-2"
            type="submit"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
}
