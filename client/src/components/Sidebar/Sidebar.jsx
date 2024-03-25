import { useContext } from "react";
import styles from "./Sidebar.module.css";
import { ThemeContext } from "../../App";

const Sidebar = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <aside className={darkMode ? styles.asideDarkM : styles.aside}>
      <h1 className={darkMode ? styles.logoDarkM : styles.logo}>ToDo</h1>
      <label class="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" onClick={toggleMode}/>
        <div class="relative w-16 h-9 bg-white rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:bg-indigo-700  after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:after:bg-gray-900"></div>
      </label>
    </aside>
  );
};

export default Sidebar;