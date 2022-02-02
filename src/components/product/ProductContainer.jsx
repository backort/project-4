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
    <div className={classNames(styles["product-container"])}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProductImage />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo />
          <ProductTabs />
          <ProductActions />
        </Grid>
      </Grid>
    </div>
  );
}
