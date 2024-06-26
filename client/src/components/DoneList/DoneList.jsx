import { useContext } from "react";
import { ThemeContext } from "../../App";
import Task from "../Task";

const DoneList = () => {
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const filteredTasks = sortedTasks?.filter((task) => task.completed === true);

  return (
    <div
      className={`${darkMode ? "bg-[#1f1f1f]" : "bg-[#fff]"} rounded-lg shadow-lg hidden md:flex flex-col justify-between transition-colors duration-500 overflow-hidden`}
    >
      <div className={`flex justify-center rounded-t-lg items-center h-16 font-poppins text-2xl text-white font-semibold transition-colors duration-500 ${darkMode ? "bg-[#000000]" : "bg-[#1cacb4]"}`}>
        Done
      </div>
      <div className={`h-full border-b-2 overflow-y-auto transition-colors duration-500 ${darkMode ? "border-b-[#313131]" : "border-b-[#e3e3e3]"}`}>
        {filteredTasks?.map((task) => {
          return (
            <Task key={task.id} {...task} getData={getData} email={userEmail} />
          );
        })}
      </div>
      <div className={`flex justify-center items-center h-16 rounded-b-xl font-poppins text-gray-500`}></div>
    </div>
  );
};

export default DoneList;