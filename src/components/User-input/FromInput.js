import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import Card from "../UI/Card";
import styles from "./FormInput.module.css";
const FormInput = (props) => {
  const [userName, SetUserName] = useState("");
  const [age, Setage] = useState("");
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError(`Please input your Good name and Age`);
      return;
    }
    if (+age < 0) {
      setError(`Age cannot be negative number!`);
      return;
    }
    if (+age > 120) {
      setError(`You're too old :) please enter age in range of 1 to 120`);
      return;
    }
    props.onsubmit({
      id: Math.random(),
      name: userName,
      age: +age,
    });
    SetUserName("");
    Setage("");
  };

  const userNameHandler = (e) => {
    SetUserName(e.target.value);
  };
  const AgeHandler = (e) => {
    Setage(e.target.value);
  };
  return (
    <div>
      {
        <Card className={styles["fromInput"]}>
          <form className={styles["form-Control"]}>
            <label className={styles["label"]}>UserName</label>
            <input
              required={true}
              onChange={userNameHandler}
              value={userName}
              className={styles["input"]}
              type="text"
            ></input>
            <label className={styles["label"]}>Age (years)</label>
            <input
              onChange={AgeHandler}
              className={styles["input"]}
              type="number"
              value={age}
            ></input>
            <button
              className={styles["button"]}
              type="submit"
              onClick={submitHandler}
            >
              Add
            </button>
          </form>
        </Card>
      }
      {error && <Overlay seterr={setError} errorMsg={error} />}
    </div>
  );
};

export default FormInput;
