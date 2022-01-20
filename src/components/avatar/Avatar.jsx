import styles from "./Avatar.module.scss";

export default function Avatar({ size, url, verified }) {
  if (size) {
    size = size;
  } else {
    size = 90;
  }
  if (verified) {
    verified = verified;
  } else {
    verified = false;
  }
  return (
    <div
      className={styles.avatar}
      style={{ width: size + "px", height: size + "px" }}
    >
      <img src={url} className={styles.image} alt="avatar" />
      {verified && (
        <img src="/images/verified.svg" alt="badge" className={styles.badge} />
      )}
    </div>
  );
}
