import { useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskList from "../../components/TaskList";
import DoneList from "../../components/DoneList";
import Footer from "../../components/Footer";
import { ThemeContext } from "../../App";
import styles from "./TodoBoardPage.module.css";

const TodoBoardPage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? styles.darkModebg : styles.bg}>
      <Sidebar />
      <Header />
      <TaskList />
      <DoneList />
      <Footer />
    </div>
  );
};

export default TodoBoardPage;