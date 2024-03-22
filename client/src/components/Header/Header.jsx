import { useContext } from "react";
import { ThemeContext } from "../../App";
import styles from "./Header.module.css";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  /*
    Dropdown menu for name where you can logout?
    */

  return (
    <header className={darkMode ? styles.headerDarkM : styles.header}>
      <h1 className={darkMode ? styles.titleDarkM : styles.title}>
        To Do List
      </h1>
      <div className={styles.profilewrapper}>
        <div className={styles.circle} />
        <p className={darkMode ? styles.nameDarkM : styles.name}>
          Simon Rosengren
        </p>
      </div>
    </header>
  );
};

export default Header;
