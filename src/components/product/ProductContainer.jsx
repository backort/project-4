import styles from "./ProductContainer.module.scss";
import classNames from "classnames";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";

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
    <Grid container className={classNames(styles["product-container"])}>
      <Grid item xs={6}>
        <ProductImage url={source} />
      </Grid>
      <Grid item xs={5}>
        <ProductInfo
          title={name}
          creator={owner}
          price={price}
          currency={currency}
          likes={likes}
          timeEnd={auction_end}
          isLive={details.isLive}
          onTimeEnd={auction_end}
        />
        <ProductTabs />
        <ProductActions
          bids={bids}
          text={details}
          isLive={details.isLive}
          currency={currency}
          buyAmount={bids.buyAmount}
          bidAmount={bids.bidAmount}
          onBid={bids.onBid}
          onBuy={bids.onBuy}
        />
      </Grid>
    </Grid>
  );
}
