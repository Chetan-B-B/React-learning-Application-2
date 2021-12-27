import { useState } from "react";
import styles from "./overlay.module.css";

const Overlay = (props) => {
  const [classes, setClasses] = useState(`${styles.overlay} `);

  return (
    <div className={classes}>
      <div className={styles["modal-content"]}>
        <span
          onClick={() => {
            setClasses(`${styles.overlay} ${styles.hidden}`);
          }}
          className={styles.close}
        >
          &times;
        </span>

        <p>{props.errorMsg}</p>
      </div>
    </div>
  );
};
export default Overlay;
