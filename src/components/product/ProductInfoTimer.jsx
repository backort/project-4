import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  if (timeEnd === null) return <div></div>;
  return (
    <div className={classNames(styles["product-info-timer"])}>
      <div className={classNames(styles.timer)}>
        <span className={classNames(styles.title)}>Ends in</span>{" "}
        <Countdown date={onTimeEnd} />
      </div>
    </div>
  );
}
