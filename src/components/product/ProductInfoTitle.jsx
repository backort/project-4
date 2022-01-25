import styles from "./ProductInfoTitle.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ProductInfoTitle({ text }) {
  return (
    <div className={classNames(styles["product-info-title"])}>
      <Typography className={classNames(styles.title)}>{text}</Typography>
    </div>
  );
}
