import styles from "./Header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>To Do List</h1>
            <div className={styles.profilewrapper}>
                <div className={styles.circle} />
                <p className={styles.name}>Simon Rosengren</p>
            </div>
        </header>
    )
}

export default Header;