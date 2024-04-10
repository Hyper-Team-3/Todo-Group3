import Task from "../Task";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import Modal from "../Modal/Modal";

const TaskListMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const filteredTasks = sortedTasks?.filter((task) => task.completed === false);

  return (
    <div className={`${darkMode ? "bg-[#1f1f1f]" : "bg-[#fff]"} shadow-lg h-full flex flex-col justify-between  transition-colors duration-500 overflow-hidden`}>
     
      <div className={`h-full overflow-y-auto border-b-2 ${darkMode ? "border-b-[#313131]" : "border-b-[#e3e3e3]"}`}>
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
        <button onClick={() => setShowModal(true)}>+ Add New</button>
      </div>
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default TaskListMobile;