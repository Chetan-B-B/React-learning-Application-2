import Card from "../UI/Card";
import InfoWrap from "./InfoWrap";
import styles from "./User-info.module.css";

const UserInfo = (props) => {
  return (
    <Card className={styles["user-info"]}>
      <li>
        {props.user.map((user) => {
          return (
            <InfoWrap ondelete={props.ondelete} key={user.id} userId={user.id}>
              {user.name} is {user.age} yr's old
            </InfoWrap>
          );
        })}
      </li>
    </Card>
  );
};
export default UserInfo;
