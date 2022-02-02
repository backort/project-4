import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";
import Chip from "@mui/material/Chip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductInfoStatus({ status }) {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <Chip
        label="Live"
        color="success"
        className={classNames(styles.status)}
        icon={<FiberManualRecordIcon />}
      />
    </div>
  );
}
