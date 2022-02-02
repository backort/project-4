import { Button, Grid } from "@mui/material";
import styles from "./ProductActions.module.scss";
import classNames from "classnames";

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={classNames(styles["product-actions"])}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button
            className={classNames(styles.button)}
            disabled={!isLive}
            variant="contained"
            onClick={onBuy}
          >
            BUY FOR {buyAmount + " " + currency}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            className={classNames(styles.button)}
            color="success"
            disabled={!isLive}
            variant="outlined"
            onClick={onBid}
          >
            PLACE BID FOR {bidAmount + " " + currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
