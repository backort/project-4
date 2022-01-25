import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";
import Chip from "@mui/material/Chip";

export default function ProductInfoStatus({ status }) {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <Chip
        label={status}
        variant="outlined"
        className={classNames(styles.status)}
      />
    </div>
  );
}
