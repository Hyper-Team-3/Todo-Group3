import { useContext } from "react";
import { ThemeContext } from "../../App";
import styles from "./Header.module.css";
import {useCookies} from 'react-cookie'

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  const [cookies, setCookie, removeCookie] = useCookies(null)

  function signOut(){
    console.log('sign out')
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  }

  return (
    <header className={darkMode ? styles.headerDarkM : styles.header}>
      <h1 className={darkMode ? styles.titleDarkM : styles.title}>
        To Do List
      </h1>
      <button className='signout' onClick={signOut}>SIGN OUT</button>
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