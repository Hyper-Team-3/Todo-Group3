import styles from "./DoneTask.module.css";

const DoneTask = () => {

    return (
        <div className={styles.parent}>
            <p className={styles.title}>Task title</p>
            <p className={styles.date}>8 Mar</p>
            <p className={styles.checkbox}>check</p>
        </div>
    )
}

export default DoneTask;