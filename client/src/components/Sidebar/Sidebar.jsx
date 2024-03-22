import { useContext } from "react";
import styles from "./Sidebar.module.css";
import { ThemeContext } from "../../App";

const Sidebar = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <aside className={styles.aside}>
      <h1 className={darkMode ? styles.logoDarkM : styles.logo}>ToDo</h1>
      <label htmlFor="toggleTwo" className={styles.label}>
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            className="peer sr-only"
            onClick={toggleMode}
          />
          <div className={darkMode ? styles.switchDarkM : styles.switch}></div>
          <div className="absolute w-8 h-8 transition bg-indigo-700 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
        </div>
      </label>
    </aside>
  );
};

export default Sidebar;
