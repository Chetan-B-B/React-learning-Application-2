import styles from "./InfoWrap.module.css";

const InfoWrap = (props) => {
  const clickHandler = (e) => {
    props.ondelete(props.userId);
  };

  return (
    <ul className={styles.infoWrap} onClick={clickHandler}>
      {props.children}
    </ul>
  );
};

export default InfoWrap;
