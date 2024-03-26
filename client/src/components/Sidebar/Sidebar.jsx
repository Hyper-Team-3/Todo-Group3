import { useContext } from "react";
import styles from "./Sidebar.module.css";
import { ThemeContext } from "../../App";

const Sidebar = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <aside className={darkMode ? styles.asideDarkM : styles.aside}>
      <h1 className={darkMode ? styles.logoDarkM : styles.logo}>ToDo</h1>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only" onClick={toggleMode}/>
        <div className={styles.slidercontainer}>
          <div className={darkMode ? styles.sliderDarkM : styles.slider}></div>
        </div>
      </label>
    </aside>
  );
};

export default Sidebar;

/*
move from css to cssdarkmode transition



*/