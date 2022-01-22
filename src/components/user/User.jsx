import { Container } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

export default function User({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <Container className={classNames(styles.user)}>
      <Avatar url={avatar} verified={verified} size={size} />
      <div className={classNames(styles.userData)}>
        <p className={classNames(styles.name)}>{name}</p>
        <p className={classNames(styles.info)}>{info} Items</p>
      </div>
    </Container>
  );
}
