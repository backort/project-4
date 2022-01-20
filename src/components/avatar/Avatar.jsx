import styles from "./Avatar.module.scss";
import classNames from "classnames";

export default function Avatar({ size = 90, url, verified = false }) {
  return (
    <div
      className={classNames(styles.avatar)}
      style={{ width: size + "px", height: size + "px" }}
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
