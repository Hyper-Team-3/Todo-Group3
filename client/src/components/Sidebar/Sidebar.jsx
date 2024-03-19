import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <h1 className={styles.logo}>ToDo</h1>
      <label htmlFor="toggleTwo" className={styles.label}>
        <div className="relative left-4">
          <input type="checkbox" id="toggleTwo" className="peer sr-only" />
          <div className={styles.switch}></div>
          <div className="absolute w-6 h-6 transition bg-indigo-700 rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"></div>
        </div>
      </label>
    </aside>
  );
};

export default Sidebar;

/*
            <label className={styles.switch}>
                <input class="sr-only peer" type="checkbox" />
                <div className={styles.slider}></div>
            </label>
*/
