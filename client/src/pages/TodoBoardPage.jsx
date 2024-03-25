import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import DoneList from "../components/DoneList";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";

const TodoBoardPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const style = "grid grid-cols-13 grid-rows-6 auto-cols-fr bg-gray-200 overflow-hidden h-screen";
  const darkModebg =
    "grid grid-cols-13 grid-rows-6 bg-gray-800/90 overflow-hidden h-screen";
  return (
    <div className={darkMode ? darkModebg : style}>
      <Sidebar />
      <Header />
      <TaskList />
      <DoneList />
      <Footer />
    </div>
  );
};

export default TodoBoardPage;
