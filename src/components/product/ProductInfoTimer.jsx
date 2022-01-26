import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  if (timeEnd === null) return <div></div>;
  else
    return (
      <div className={classNames(styles["product-info-timer"])}>
        <p className={classNames(styles.title)}>Ends in</p>
        <div className={classNames(styles.timer)}>
          <Countdown date={onTimeEnd} />
        </div>
      </div>
    );
}
