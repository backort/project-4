import styles from "./Avatar.module.scss";
import classNames from "classnames";

function Avatar({ size, url, verified }) {
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

export default Avatar;

Avatar.defaultProps = {
  size: "90",
  verified: false,
};
