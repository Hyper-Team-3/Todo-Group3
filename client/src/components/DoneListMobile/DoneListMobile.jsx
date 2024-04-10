import { useContext } from "react";
import { ThemeContext } from "../../App";
import Task from "../Task";

const DoneListMobile = () => {
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);

  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const filteredTasks = sortedTasks?.filter((task) => task.completed === true);

  return (
    <div
      className={`${darkMode ? "bg-[#1f1f1f]" : "bg-[#fff]"} shadow-lg h-full flex flex-col justify-between transition-colors duration-500`}
    >
      <div className={`h-full overflow-y-auto`}>
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

export default DoneListMobile;