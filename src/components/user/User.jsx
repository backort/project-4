import { Container } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

function User({ name, info, avatar, size, verified }) {
  return (
    <Container className={classNames(styles.user)}>
      <Avatar url={avatar} verified={verified} size={size} />
      <div className={classNames(styles.userData)}>
        <p className={classNames(styles.name)}>{name}</p>
        <p className={classNames(styles.info)}>{info}</p>
      </div>
    </Container>
  );
}

User.defaultProps = {
  name: "",
  info: "",
  avatar: "",
  size: "55",
  verified: false,
};

export default User;
