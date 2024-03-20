import Header from "../Header";
import Tasks from "../Tasks";
import DoneTasks from "../DoneTasks";
import Footer from "../Footer";

import styles from "./TodoBoard.module.css";

const TodoBoard = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.tasks_cards}>
        <Tasks />
        <DoneTasks />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default TodoBoard;
