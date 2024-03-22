import styles from "./Task.module.css";

const Task = () => {
    

    return (
        <div className={styles.parent}>
            <div className={styles.color}></div>
            <p className={styles.title}>Task title</p>
            <p className={styles.date}>8 Mar</p>
            <p className={styles.checkbox}>check</p>
        </div>
    )
}

export default Task;