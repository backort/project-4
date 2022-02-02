import styles from "./ProductContainer.module.scss";
import classNames from "classnames";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import Grid from "@mui/material/Grid";

export default function ProductContainer({
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source,
}) {
  return (
    <div className={classNames(styles["product-container"])}>
      <Grid container>
        <Grid item xs={6}>
          <ProductImage url={source?.url} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={owner}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={auction_end}
            onTimeEnd={auction_end}
          />
         {/*  <ProductTabs bids={bids} text={details} /> */}
          <ProductActions
            isLive={auction_end}
            currency={currency}
            buyAmount={bids}
            bidAmount={bids}
            onBid={bids}
            onBuy={bids}
          />
        </Grid>
      </Grid>
    </div>
  );
}
