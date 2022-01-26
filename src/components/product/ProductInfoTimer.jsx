import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";
import React from "react";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  return (
    <div className={classNames(styles["product-info-timer"])}>
      {timeEnd ? (
        <React.Fragment>
          <p className={classNames(styles.title)}>Ends in</p>
          <div className={classNames(styles.timer)}>
            <Countdown date={onTimeEnd} />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
}
