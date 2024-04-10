import { useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import DoneList from "../../components/DoneList";
import Footer from "../../components/Footer";
import { ThemeContext } from "../../App";
import MobileTaskSection from "../../components/MobileTaskSection";

const TodoBoardPage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="h-dvh grid grid-cols-1 grid-rows-[70px_6fr] md:grid-rows-1 md:grid-cols-[100px_1fr] ">
    <Sidebar />
  <div className={`md:h-lvh transition-colors duration-500 flex flex-col gap-[0.1rem] md:gap-4  ${darkMode ? "bg-[#393939]" : "bg-[#e4e4e4]"}`}>
    <div className="hidden md:block">
    <Header/>
    </div>
    <div className="flex-[1_1_0] overflow-hidden">
    <div className="h-full md:grid grid-cols-1 md:grid-cols-2 gap-4 md:px-4">
    <MobileTaskSection />
    <TaskList />
    <DoneList />
    </div>
    </div>
    <Footer />
  </div>
  </div>
  );
};

export default TodoBoardPage;