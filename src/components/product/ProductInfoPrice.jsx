import styles from "./ProductInfoPrice.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function ProductInfoPrice({ amount = 0, currency }) {
  return (
    <div className={classNames(styles["product-info-price"])}>
      <Typography variant="h2">
        ON SALE FOR {amount} {currency}
      </Typography>
    </div>
  );
}
