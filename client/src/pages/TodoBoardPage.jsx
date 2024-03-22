import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Tasks from "../components/Tasks";
import DoneTasks from "../components/DoneTasks";
import Footer from "../components/Footer";
import { ThemeContext } from "../App";

const TodoBoardPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const style = "grid grid-cols-13 grid-rows-6 bg-gray-200 overflow-hidden";
  const darkModebg =
    "grid grid-cols-13 grid-rows-6 bg-gray-800/90 overflow-hidden";
  return (
    <div className={darkMode ? darkModebg : style}>
      <Sidebar />
      <Header />
      <Tasks />
      <DoneTasks />
      <Footer />
    </div>
  );
};

export default TodoBoardPage;
