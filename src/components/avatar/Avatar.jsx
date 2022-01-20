import styles from "./Avatar.module.scss";
import classNames from "classnames";

export default function Avatar({ size, url, verified }) {
  return (
    <div
      className={classNames(styles.avatar)}
      style={
        size
          ? { width: size + "px", height: size + "px" }
          : { width: "90px", height: "90px" }
      }
    >
      <img src={url} className={classNames(styles.image)} alt="avatar" />
      {verified && (
        <img
          src="/images/verified.svg"
          alt="badge"
          className={classNames(styles.badge)}
        />
      )}
    </div>
  );
}
