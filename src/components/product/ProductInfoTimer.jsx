import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";
import React from "react";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  return (
    <div
      className={classNames(styles["product-info-timer"], {
        [styles.active]: timeEnd,
      })}
    >
      {timeEnd ? (
        <div className={classNames(styles.timer)}>
          <p className={classNames(styles.title)}>Ends in</p>
          <Countdown date={onTimeEnd} />
        </div>
      ) : (
        <div className={classNames(styles.timer)}></div>
      )}
    </div>
  );
}
