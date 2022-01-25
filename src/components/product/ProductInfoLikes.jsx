import styles from "./ProductInfoLikes.module.scss";
import classNames from "classnames";
import Chip from "@mui/material/Chip";
import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip
        label={millify(amount)}
        variant="outlined"
        className={classNames(styles.likes)}
      />
    </div>
  );
}
