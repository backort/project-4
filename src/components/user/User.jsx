import { Container } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

export default function User({ name, info, avatar, size, verified }) {
  return (
    <Container className={classNames(styles.user)}>
      <Avatar url={avatar} verified={true} size={size} />
      <div className={classNames(styles.userData)}>
        <p className={classNames(styles.name)}>{name}</p>
        <p className={classNames(styles.info)}>{info}</p>
      </div>
    </Container>
  );
}

User.defaultProps = {
  name: "terlika79",
  info: "134 items",
  avatar: "/images/avatar.png",
  size: "55",
  verified: false,
};
