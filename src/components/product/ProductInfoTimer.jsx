import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";
import React from "react";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  if (!timeEnd) {
    return (
      <div
        className={classNames(styles["product-info-timer"], {
          [styles.active]: !timeEnd,
        })}
      >
        <p className={classNames(styles.title)}>Ends in</p>
        <div className={classNames(styles.timer)}>
          <Countdown date={onTimeEnd} />
        </div>
      </div>
    );
  }
  return <div></div>;
}
