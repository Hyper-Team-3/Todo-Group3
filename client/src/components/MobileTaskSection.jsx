import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import TaskListMobile from "./TaskListMobile/TaskListMobile";
import DoneListMobile from "./DoneListMobile/DoneListMobile";

export default function MobileTaskSection() {
  const { darkMode, tasks, userEmail, getData } = useContext(ThemeContext);
  const [currentTab, setCurrentTab] = useState("tasks");

  return (
    <div className="md:hidden flex flex-col flex-[1_1_0] h-full">
      <div className="flex md:hidden ">
        <button className={`flex-1 text-white p-2 font-bold ${currentTab === "tasks" ? "bg-[#3e166e]" : "bg-[#484848]"}`} onClick={() => setCurrentTab("tasks")}>TASKS</button>
        <button className={`flex-1 text-white p-2 font-bold ${currentTab === "done" ? "bg-[#3e166e]" : "bg-[#484848]"}`} onClick={() => setCurrentTab("done")}>DONE</button>
      </div>
      {currentTab === "tasks" ? 
      <TaskListMobile /> :
      <DoneListMobile />  
    }
    </div>
  )
}
