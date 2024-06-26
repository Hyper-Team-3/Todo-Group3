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
    <div className={`${darkMode ? "bg-[#1f1f1f]" : "bg-[#fff]"} shadow-lg rounded-lg overflow-hidden hidden md:flex flex-col justify-between transition-colors duration-500`}>
      <div className={` md:flex justify-center rounded-t-lg items-center h-16 transition-colors duration-500 ${darkMode ? "bg-[#000000]" : "bg-[#1f0045]"} font-poppins text-2xl text-white font-semibold`}>
        Tasks
      </div>
      <div className={`h-full max-h-full border-b-2 overflow-y-auto transition-colors duration-500 ${darkMode ? "border-b-[#313131]" : "border-b-[#e3e3e3]"}`}>
        {filteredTasks?.length === 0 ? <span className={` ${darkMode ? "text-white" : "text-black"} m-[1rem] block font-semibold`}>All tasks cleared! 🎉</span> :
        filteredTasks?.map((task) => {
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
      <div className={`flex justify-center items-center h-16 rounded-b-xl font-poppins ${darkMode ? "text-[#fff]" : "text-gray-500"}`}>
        <button className="transition-colors duration-500" onClick={() => setShowModal(true)}>+ Add New</button>
      </div>
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default TaskList;