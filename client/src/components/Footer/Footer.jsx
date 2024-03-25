import styles from "./Footer.module.css";
import { ThemeContext } from "../../App";
import { useContext } from "react";

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer className={darkMode ? styles.footerDarkM : styles.footer}>
            <p className={styles.text}>Made by Alexander, Jaemin, Simon, Heidi, Carmela</p>
        </footer>
    )
}

export default Footer;